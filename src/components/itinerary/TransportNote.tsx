import { Train } from "lucide-react";

interface TransportNoteProps {
  notes: { text: string }[];
}

export default function TransportNote({ notes }: TransportNoteProps) {
  return (
    <div className="mt-8 rounded-[2px] border border-nevoa-200 bg-nevoa-50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Train className="h-4 w-4 text-nevoa-600" />
        <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.12em] text-nevoa-600">
          Transport
        </span>
      </div>
      <ul className="space-y-1.5">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-granito-light">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-nevoa-400" />
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
