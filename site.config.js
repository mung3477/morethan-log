const CONFIG = {
  // profile setting (required)
  profile: {
    name: "mung3477",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer & AI researcher",
    bio: "I like immediate visual feedbacks.",
    email: "mung3477@korea.ac.kr",
    linkedin: "woosung-joung-1187bb277",
    github: "mung3477",
    instagram: "mung3477",
  },
  projects: [
    {
      name: `ARA`,
      href: "https://aradatabase-ba6d4.web.app/",
    },
    {
      name: "FLAMEL",
      href: "https://flamel.app/"
    }
  ],
  // blog setting (required)
  blog: {
    title: "mung3477's blog",
    description: "Hello world!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://mung3477-dev.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "/bassethound.png", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["blog", "website", "frontend", "AI"]
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 10, // revalidate time for [slug], index
}

module.exports = { CONFIG }
