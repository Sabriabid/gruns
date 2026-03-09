import Image from "next/image";
import { content } from "@/lib/content";

export default function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-3">
            {content.comparison.title}
          </h2>
          <p className="text-brand-dark/60 max-w-xl">
            {content.comparison.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/comparison-table.jpeg"
            alt="Groms vs multivitamine générique vs poudre verte trop chère"
            width={800}
            height={800}
            className="rounded-2xl shadow-sm w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
