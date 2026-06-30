# miyoki-portfolio

Miyoki（AIプロダクトエンジニア）のポートフォリオサイト。
AI業務自動化・ツール開発の実績を見せて受託相談につなげる入口。Web/LP制作は別ブランド Nompass に送客する。

## 技術構成

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS（CSS変数でブランドカラー）
- Cloudflare Pages（`@cloudflare/next-on-pages`）
- 実績データは `src/data/works.ts` に直書き（microCMSは未導入＝後追い可）

## セットアップ

```bash
npm install
cp .env.local.example .env.local   # NEXT_PUBLIC_SITE_URL を設定
npm run dev                         # http://localhost:3000
```

## 編集する場所

- サイト設定（名前・肩書き・リンク・メール）: `src/data/site.ts`
- 実績の追加・編集: `src/data/works.ts`（1件 = 課題→作ったもの→AIの使いどころ→技術→結果）
- ブランドカラー: `src/app/globals.css` の `--brand` 系

## 公開前チェック（Nompass build の作法準拠）

- [ ] `NEXT_PUBLIC_SITE_URL` を本番ドメインに設定（OGP・構造化データの絶対URL）
- [x] `public/og.png`（1200×630）を用意（実ロゴ＋ブランド色で生成済み）
- [x] ロゴを WebP 化（`public/logo-avatar.webp` / `public/logo-mark.webp`、元PNGは `brand/`）
- [ ] 実績の公開URL / リポジトリ / 解説記事リンクを `works.ts` に追記
- [ ] ヒーローの一言（`site.ts` の tagline）を最終確認

## デプロイ（Cloudflare Pages）

```bash
npm run pages:build   # @cloudflare/next-on-pages でビルド
npm run deploy        # wrangler でデプロイ
```

通常は GitHub プッシュで Cloudflare Pages が自動デプロイ。

## 未実装（後追い）

- 問い合わせフォーム（現状はメール＋SNSリンク。Resend導入は後で）
- ブログ（`miyoki-media-pipeline` 連携・microCMS）
