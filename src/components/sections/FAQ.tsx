import { content } from "@/lib/content";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark lg:w-1/3 shrink-0">
            {content.faq.title}
          </h2>
          <div className="flex-1 w-full">
            <Accordion items={content.faq.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
