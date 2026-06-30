"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// .fade-in を付けた要素が画面に入ったら .is-visible を付与してアニメーションさせる。
// pathname が変わるたびに再監視する（SPA遷移後の新しい要素が opacity:0 のまま
// 残らないようにする）。
export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".fade-in:not(.is-visible)");
    const win = window as Window & { __nbReveal?: boolean };

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      win.__nbReveal = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    win.__nbReveal = true;

    // 遷移直後に IntersectionObserver が発火しないケースの保険：
    // 少し後にビューポート内の未表示要素を一括で出す。
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".fade-in:not(.is-visible)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("is-visible");
          }
        });
    }, 300);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
