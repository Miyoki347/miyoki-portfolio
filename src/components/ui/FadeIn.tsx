import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
};

// .fade-in を付けるだけの薄いラッパー。発火は ScrollObserver が行う。
export default function FadeIn({ children, className = "", delay }: Props) {
  return (
    <div className={`fade-in${delay ? ` delay-${delay}` : ""} ${className}`}>
      {children}
    </div>
  );
}
