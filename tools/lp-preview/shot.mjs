// Screenshots pleine page (desktop + mobile) de la preview locale.
// Usage : node shot.mjs [slug]
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'digestion';
const url = 'file://' + join(here, 'out', `lp-${slug}.html`);

const browser = await chromium.launch({
  executablePath: process.env.LP_CHROMIUM || undefined,
  args: ['--no-sandbox'],
});

for (const [name, viewport] of [
  ['desktop', { width: 1366, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport });
  await page.goto(url);
  // Force la révélation des sections (reveal déclenché au scroll) et le
  // chargement des images lazy (la capture fullPage ne scrolle pas réellement,
  // les images natives lazy sous la ligne de flottaison resteraient vides).
  await page.evaluate(() => {
    document.querySelectorAll('[data-lp-reveal]').forEach((el) => el.classList.add('in'));
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = 'eager';
    });
    const sticky = document.querySelector('[data-lp-sticky]');
    if (sticky) sticky.classList.add('lp-sticky--visible');
  });
  await page.waitForFunction(
    () => [...document.images].every((img) => img.complete),
    { timeout: 15000 }
  );
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(here, 'out', `lp-${slug}-${name}.png`), fullPage: true });
  console.log(`OK out/lp-${slug}-${name}.png`);
  await page.close();
}

await browser.close();
