import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-[family-name:var(--font-ui)] text-[11px] font-medium uppercase tracking-[0.2em] text-nevoa-500">
        404
      </span>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-600 text-granito">
        Lost in the Fog
      </h1>
      <p className="mt-2 max-w-sm text-sm text-granito-light">
        This page doesn&apos;t exist — perhaps it wandered into Sintra&apos;s
        enchanted forest. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-nevoa-800 px-6 py-2.5 font-[family-name:var(--font-ui)] text-[13px] font-medium text-white transition-colors hover:bg-nevoa-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
