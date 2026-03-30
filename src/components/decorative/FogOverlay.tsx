"use client";

interface FogOverlayProps {
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export default function FogOverlay({
  className = "",
  intensity = "light",
}: FogOverlayProps) {
  const opacities = {
    light: "opacity-[0.04]",
    medium: "opacity-[0.07]",
    heavy: "opacity-[0.12]",
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute -inset-[100px] ${opacities[intensity]}`}
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 20% 30%, var(--color-nevoa-200), transparent), radial-gradient(ellipse 500px 350px at 80% 60%, var(--color-calcario-200), transparent), radial-gradient(ellipse 700px 300px at 50% 80%, var(--color-nevoa-100), transparent)",
          animation: "fog-drift 35s ease-in-out infinite",
        }}
      />
      <div
        className={`absolute -inset-[100px] ${opacities[intensity]}`}
        style={{
          background:
            "radial-gradient(ellipse 550px 380px at 70% 20%, var(--color-calcario-100), transparent), radial-gradient(ellipse 450px 320px at 30% 70%, var(--color-nevoa-100), transparent)",
          animation: "fog-drift-slow 45s ease-in-out infinite",
        }}
      />
      <div
        className={`absolute -inset-[100px] ${opacities[intensity]}`}
        style={{
          background:
            "radial-gradient(ellipse 480px 360px at 50% 40%, var(--color-nevoa-200), transparent)",
          animation: "fog-drift-reverse 40s ease-in-out infinite",
        }}
      />
    </div>
  );
}
