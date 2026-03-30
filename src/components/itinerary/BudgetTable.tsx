import { BudgetRow } from "@/data/itineraries/types";

interface BudgetTableProps {
  rows: BudgetRow[];
  totals: { budget: string; mid: string; comfort: string };
}

export default function BudgetTable({ rows, totals }: BudgetTableProps) {
  return (
    <section className="mt-12">
      <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-600 text-granito">
        Budget Breakdown
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-calcario-400">
              <th className="py-2 pr-4 text-left font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-nevoa-500">
                Category
              </th>
              <th className="py-2 px-4 text-right font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-musgo-600">
                Budget
              </th>
              <th className="py-2 px-4 text-right font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-palacio-600">
                Mid-Range
              </th>
              <th className="py-2 pl-4 text-right font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-ferrugem-600">
                Comfort
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.category}
                className={i % 2 === 0 ? "bg-calcario-50" : ""}
              >
                <td className="py-2 pr-4 text-granito-light">{row.category}</td>
                <td className="py-2 px-4 text-right text-granito">{row.budget}</td>
                <td className="py-2 px-4 text-right text-granito">{row.mid}</td>
                <td className="py-2 pl-4 text-right text-granito">{row.comfort}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-calcario-400 font-semibold">
              <td className="py-2 pr-4 text-granito">Total</td>
              <td className="py-2 px-4 text-right text-musgo-700">{totals.budget}</td>
              <td className="py-2 px-4 text-right text-palacio-700">{totals.mid}</td>
              <td className="py-2 pl-4 text-right text-ferrugem-700">{totals.comfort}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
