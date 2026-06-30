/** @type {import('next').NextConfig} */
const nextConfig = {
  // 全ページ静的なので静的エクスポート（Cloudflare Pages へ out/ をそのまま配信）
  output: "export",
  images: {
    // Cloudflare では next/image 最適化が効かないため未最適化で配信（画像は事前にWebP最適化済み）
    unoptimized: true,
  },
};

export default nextConfig;
