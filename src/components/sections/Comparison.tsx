"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { Check, X } from "lucide-react";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  defaultTransition,
  defaultViewport,
} from "@/lib/animations";

function CellValue({ value }: { value: string }) {
  if (value === "check") {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-purple text-white">
        <Check size={18} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-400">
        <X size={18} />
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function Comparison() {
  const { title, subtitle, headers, rows } = content.comparison;

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-purple mb-3">
            {title}
          </h2>
          <p className="text-brand-dark/60 max-w-xl">{subtitle}</p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <motion.table
            className="w-full border-collapse min-w-[600px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {/* Header */}
            <thead>
              <tr>
                <th className="p-4 text-left" />
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center font-bold text-sm whitespace-pre-line ${
                      i === 0
                        ? "bg-brand-purple text-white rounded-t-2xl text-base"
                        : "text-brand-dark/60"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {rows.map((row, rowIdx) => (
                <motion.tr
                  key={rowIdx}
                  variants={fadeInUp}
                  className={`border-b border-gray-100 ${
                    rowIdx % 2 === 0 ? "bg-white" : "bg-brand-cream/30"
                  }`}
                >
                  <td className="p-4 text-sm font-medium text-brand-dark">
                    {row.label}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td
                      key={colIdx}
                      className={`p-4 text-center text-sm font-semibold ${
                        colIdx === 0
                          ? "bg-brand-purple/5 text-brand-purple"
                          : "text-brand-dark/70"
                      }`}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </motion.div>
      </div>
    </section>
  );
}
