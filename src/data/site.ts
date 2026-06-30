// サイト全体の設定。文章・リンクはここを直せば全ページに反映される。

export const site = {
  name: "Miyoki",
  role: "AIプロダクトエンジニア",
  // ヒーローの一言
  tagline: "創って、動かして、届ける。",
  taglineSub: "AIでプロダクトを形にする。",
  intro:
    "RAG・業務自動化・AIアプリ開発が専門です。個人で事業（Nompass）を立ち上げた当事者として、企画から運用まで一気通貫で支援します。",
  email: "miyoki.43834@gmail.com",
  // 公開URL（env優先・未設定なら空）
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",

  // Web/LP制作の送客先（別ブランド Nompass）
  nompassUrl: "https://nompass.jp",

  links: {
    github: "https://github.com/Miyoki347",
    zenn: "https://zenn.dev/miyoki347",
    qiita: "https://qiita.com/Miyoki347",
    x: "https://x.com/Miyoki_Music",
    note: "https://note.com/miyoki_music",
    youtube: "https://www.youtube.com/@Miyoki_Music",
  },
} as const;

export type ChannelKey = keyof typeof site.links;
