"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";
import StarRating from "@/components/ui/StarRating";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(content.testimonials.tabs[0]);

  const filteredReviews = content.testimonials.reviews.filter(
    (r) => r.tab === activeTab
  );

  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social proof image */}
        <motion.div
          className="flex justify-center mb-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <Image
            src="/images/social-proof.jpeg"
            alt="Approuvé par 1,000,000+ de clients"
            width={500}
            height={500}
            className="rounded-2xl shadow-sm w-full max-w-md h-auto"
          />
        </motion.div>

        <motion.div
          className="text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <StarRating rating={5} size={20} />
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-3">
            {content.testimonials.title}
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {content.testimonials.tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === tab
                  ? "bg-brand-green text-white"
                  : "bg-white text-brand-dark border border-brand-green/20 hover:border-brand-green"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Reviews */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {(filteredReviews.length > 0
              ? filteredReviews
              : content.testimonials.reviews.slice(0, 3)
            ).map((review, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={defaultTransition}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-brand-green/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <StarRating rating={review.stars} size={14} />
                <p className="text-brand-dark font-bold mt-3 mb-2 text-sm leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold">
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-sm text-brand-dark/60">
                    {review.author}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
