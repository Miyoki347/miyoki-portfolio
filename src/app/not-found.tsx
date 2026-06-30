import Link from "next/link";

export const metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-sm text-brand-accent">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
        ページが見つかりませんでした
      </h1>
      <p className="mt-3 text-foreground/60">
        URLが変わったか、削除された可能性があります。
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-light"
        >
          トップへ戻る
        </Link>
        <Link
          href="/works"
          className="rounded-lg border border-black/10 px-5 py-3 text-sm font-medium hover:border-brand/40"
        >
          実績を見る
        </Link>
      </div>
    </main>
  );
}
