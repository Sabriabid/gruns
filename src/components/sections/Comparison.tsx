import { content } from "@/lib/content";
import { Check, X } from "lucide-react";

function CellValue({ value }: { value: string }) {
  if (value === "check")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-green text-white">
        <Check size={16} />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-gray-500">
        <X size={16} />
      </span>
    );
  return <span>{value}</span>;
}

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

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr>
                <th className="text-left p-3 sm:p-4"></th>
                {content.comparison.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`p-3 sm:p-4 text-center text-xs sm:text-sm font-bold whitespace-pre-line ${
                      i === 0
                        ? "bg-brand-green text-brand-yellow rounded-t-2xl text-lg"
                        : "text-brand-dark/60"
                    }`}
                  >
                    {i === 0 ? content.brand : h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <td className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-brand-dark">
                    {row.label}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`p-3 sm:p-4 text-center text-xs sm:text-sm font-bold ${
                        j === 0
                          ? "bg-brand-green/5 text-brand-green"
                          : row.highlight[j]
                          ? "text-brand-green"
                          : "text-brand-dark/50"
                      }`}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
