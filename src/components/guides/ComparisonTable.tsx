interface ComparisonTableProps {
  headers: string[];
  rows: Record<string, string>[];
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  const keys = ["name", "cost", "time", "crowds", "bestFor", "verdict"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-calcario-400">
            {headers.map((h) => (
              <th
                key={h}
                className="py-2 px-3 text-left font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-wider text-nevoa-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${i % 2 === 0 ? "bg-calcario-50" : ""} border-b border-calcario-200`}
            >
              {keys.map((key) => (
                <td
                  key={key}
                  className={`py-2.5 px-3 ${
                    key === "name"
                      ? "font-[family-name:var(--font-display)] font-600 text-granito"
                      : "text-granito-light"
                  } ${key === "verdict" ? "font-[family-name:var(--font-ui)] text-[12px] font-medium" : ""}`}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
