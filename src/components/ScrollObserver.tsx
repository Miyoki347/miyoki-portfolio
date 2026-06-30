"use client";

import { useEffect } from "react";

// .fade-in を付けた要素が画面に入ったら .is-visible を付与してアニメーションさせる。
// 起動できたら window.__nbReveal を立て、layout 側のフェイルセーフへ「起動済み」と伝える。
export default function ScrollObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".fade-in");
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

    return () => observer.disconnect();
  }, []);

  return null;
}
