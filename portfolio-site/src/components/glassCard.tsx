import { ReactNode } from "react";

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-opacity-bg-linear-15 from-gray-700 to-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] ${className}`}
    >
      {children}
    </div>
  );
}