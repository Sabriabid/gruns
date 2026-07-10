// Preview local du kit LP Liquid — rend une LP complète en HTML statique,
// sans boutique Shopify : les objets/filtres Shopify sont shimés (assets
// résolus en chemins relatifs, produit absent → la buy box passe en mode démo,
// exactement comme dans l'éditeur de thème avant configuration).
//
// Usage : node render.mjs [slug]          (défaut : digestion)
// Sortie : tools/lp-preview/out/lp-<slug>.html (+ assets copiés)
import { Liquid } from 'liquidjs';
import { readFileSync, writeFileSync, mkdirSync, cpSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const THEME = join(here, '..', '..', 'theme');
const OUT = join(here, 'out');
const slug = process.argv[2] || 'digestion';

const template = JSON.parse(
  readFileSync(join(THEME, 'templates', `page.lp-${slug}.json`), 'utf8')
);

const engine = new Liquid({
  root: [join(THEME, 'snippets')],
  extname: '.liquid',
  relativeReference: false,
  strictFilters: false,
  strictVariables: false,
});

// --- Tags Shopify absents de LiquidJS -------------------------------------
engine.registerTag('schema', {
  parse(tagToken, remainTokens) {
    this.tokens = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream
      .on('token', (token) => {
        if (token.name === 'endschema') stream.stop();
        else this.tokens.push(token);
      })
      .on('end', () => {});
    stream.start();
  },
  render() {
    return '';
  },
});

engine.registerTag('form', {
  parse(tagToken, remainTokens) {
    this.tpls = [];
    const stream = this.liquid.parser.parseStream(remainTokens);
    stream
      .on('template', (tpl) => this.tpls.push(tpl))
      .on('tag:endform', () => stream.stop())
      .on('end', () => {});
    stream.start();
  },
  *render(ctx, emitter) {
    emitter.write('<form action="/cart/add" method="post">');
    yield this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter);
    emitter.write('</form>');
  },
});

// --- Filtres Shopify shimés ------------------------------------------------
const assetPath = (name) => `assets/${name}`;
engine.registerFilter('asset_url', assetPath);
engine.registerFilter('asset_img_url', (name) => assetPath(name));
engine.registerFilter('stylesheet_tag', (url) => `<link rel="stylesheet" href="${url}">`);
engine.registerFilter('preload_tag', (url, ...args) => {
  const attrs = Object.fromEntries(args.map(([k, v]) => [k, v]));
  const extra = Object.entries(attrs)
    .map(([k, v]) => ` ${k}="${v}"`)
    .join('');
  return `<link rel="preload" href="${url}"${extra}>`;
});
engine.registerFilter('image_url', (img) => img || '');
engine.registerFilter('image_tag', (url, ...args) => {
  const attrs = Object.fromEntries(args.map(([k, v]) => [k, v]));
  return `<img src="${url}" class="${attrs.class || ''}" loading="${attrs.loading || 'lazy'}" alt="">`;
});
engine.registerFilter('money', (cents) => `${(cents / 100).toFixed(2).replace('.', ',')} €`);
engine.registerFilter('font_url', () => '');
engine.registerFilter('font_face', () => '');
engine.registerFilter('t', (x) => x);

// --- Rendu des sections ----------------------------------------------------
const globals = {
  request: { locale: { iso_code: 'fr' }, design_mode: false },
  settings: {},
  page_title: `Gomu — LP ${slug} (preview locale)`,
  page_description: 'Preview locale du kit LP, sans boutique Shopify.',
};

let body = '';
for (const key of template.order) {
  const def = template.sections[key];
  const src = readFileSync(join(THEME, 'sections', `${def.type}.liquid`), 'utf8');
  const blocks = (def.block_order || []).map((id) => ({
    type: def.blocks[id].type,
    settings: def.blocks[id].settings,
    shopify_attributes: '',
    id,
  }));
  const section = {
    id: key,
    settings: def.settings || {},
    blocks,
  };
  const html = await engine.parseAndRender(src, { ...globals, section });
  body += `<div id="shopify-section-${key}" class="shopify-section">${html}</div>\n`;
}

// --- Layout ------------------------------------------------------------------
const layoutSrc = readFileSync(join(THEME, 'layout', 'lp.liquid'), 'utf8');
const page = await engine.parseAndRender(layoutSrc, {
  ...globals,
  content_for_header: '<!-- content_for_header -->',
  content_for_layout: body,
});

mkdirSync(join(OUT, 'assets'), { recursive: true });
for (const f of readdirSync(join(THEME, 'assets'))) {
  cpSync(join(THEME, 'assets', f), join(OUT, 'assets', f));
}
writeFileSync(join(OUT, `lp-${slug}.html`), page);
console.log(`OK out/lp-${slug}.html (${(page.length / 1024).toFixed(0)} Ko)`);
