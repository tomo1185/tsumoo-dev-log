import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tsumoo 開発ログ",
  description: "Tsumoo の公開用開発ログと技術メモ。",
  base: "/tsumoo-dev-log/",
  lang: "ja-JP",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Tsumoo 開発ログ",
    nav: [
      { text: "トップ", link: "/" },
      { text: "ロードマップ", link: "/roadmap/project-roadmap" },
      { text: "開発ログ", link: "/dev-logs/2026-06/2026-06-15" },
      { text: "公開方針", link: "/overview/repository-policy" }
    ],
    sidebar: [
      {
        text: "概要",
        items: [
          { text: "プロジェクト概要", link: "/overview/project-summary" },
          { text: "公開方針", link: "/overview/repository-policy" }
        ]
      },
      {
        text: "ロードマップ",
        items: [
          { text: "全体ロードマップ", link: "/roadmap/project-roadmap" },
          { text: "フェーズ計画", link: "/roadmap/phase-plan" }
        ]
      },
      {
        text: "技術メモ",
        items: [
          { text: "フロントエンド", link: "/architecture/frontend" },
          { text: "バックエンド", link: "/architecture/backend" },
          { text: "認証", link: "/architecture/auth" }
        ]
      },
      {
        text: "設計判断",
        items: [
          { text: "製品コード非公開・開発ログ公開", link: "/decisions/adr-0001-private-product-public-log" },
          { text: "技術スタック", link: "/decisions/adr-0002-tech-stack" }
        ]
      },
      {
        text: "開発ログ",
        items: [
          { text: "2026年6月15日（月）", link: "/dev-logs/2026-06/2026-06-15" },
          { text: "2026年6月14日（日）", link: "/dev-logs/2026-06/2026-06-14" },
          { text: "2026年6月13日（土）", link: "/dev-logs/2026-06/2026-06-13" },
          { text: "2026年6月10日（水）", link: "/dev-logs/2026-06/2026-06-10" },
          { text: "2026年6月9日（火）", link: "/dev-logs/2026-06/2026-06-09" },
          { text: "2026年6月8日（月）", link: "/dev-logs/2026-06/2026-06-08" },
          { text: "2026年6月7日（日）", link: "/dev-logs/2026-06/2026-06-07" },
          { text: "2026年6月6日（土）", link: "/dev-logs/2026-06/2026-06-06" },
          { text: "2026年6月5日（金）", link: "/dev-logs/2026-06/2026-06-05" },
          { text: "2026年6月4日（木）", link: "/dev-logs/2026-06/2026-06-04" },
          { text: "2026年6月3日（水）", link: "/dev-logs/2026-06/2026-06-03" },
          { text: "2026年6月2日（火）", link: "/dev-logs/2026-06/2026-06-02" },
          { text: "2026年6月1日（月）", link: "/dev-logs/2026-06/2026-06-01" },
          { text: "2026年5月31日（日）", link: "/dev-logs/2026-05/2026-05-31" },
          { text: "2026年5月30日（土）", link: "/dev-logs/2026-05/2026-05-30" },
          { text: "2026年5月29日（金）", link: "/dev-logs/2026-05/2026-05-29" },
          { text: "2026年5月28日（木）", link: "/dev-logs/2026-05/2026-05-28" },
          { text: "2026年5月27日（水）", link: "/dev-logs/2026-05/2026-05-27" },
          { text: "2026年5月26日（火）", link: "/dev-logs/2026-05/2026-05-26" },
          { text: "2026年5月25日（月）", link: "/dev-logs/2026-05/2026-05-25" },
          { text: "2026年5月24日（日）", link: "/dev-logs/2026-05/2026-05-24" },
          { text: "2026年5月23日（土）", link: "/dev-logs/2026-05/2026-05-23" },
          { text: "2026年5月22日（金）", link: "/dev-logs/2026-05/2026-05-22" }
        ]
      },
      {
        text: "学習メモ",
        items: [
          { text: "Next.js", link: "/learnings/nextjs" },
          { text: "Laravel", link: "/learnings/laravel" },
          { text: "Docker", link: "/learnings/docker" },
          { text: "GitHub Actions", link: "/learnings/github-actions" }
        ]
      }
    ],
    outline: {
      label: "目次"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/tomo1185/tsumoo-dev-log" }
    ],
    footer: {
      message: "Tsumoo の公開用開発ログと技術メモ。",
      copyright: "Copyright © 2026 tomo1185"
    }
  }
});
