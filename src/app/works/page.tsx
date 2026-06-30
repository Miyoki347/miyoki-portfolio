import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "実績",
  description: "RAG・業務自動化・AIアプリ開発を中心とした制作実績。",
};

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <FadeIn>
        <p className="font-mono text-xs text-brand-accent">WORKS</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">実績</h1>
        <p className="mt-3 max-w-2xl text-foreground/65">
          AIをどこに使い、どこを人が握ったか。課題から結果までを1件ずつ書いています。
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <FadeIn key={w.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <WorkCard work={w} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
