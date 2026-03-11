"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import {
  slideInLeft,
  slideInRight,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function FeaturedTestimonial() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <motion.div
            className="flex-1 w-full"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <Image
              src="/images/lifestyle-sachet.jpeg"
              alt="Témoignage lifestyle Groms"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          {/* Quote */}
          <motion.div
            className="flex-1"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={defaultTransition}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight mb-6">
              &ldquo;{content.featuredTestimonial.quote}&rdquo;
            </p>
            <p className="text-brand-dark/60 leading-relaxed mb-8">
              {content.featuredTestimonial.text}
            </p>
            <div>
              <p className="font-bold text-brand-dark">
                {content.featuredTestimonial.author}
              </p>
              <p className="text-sm text-brand-dark/50">
                {content.featuredTestimonial.role}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
