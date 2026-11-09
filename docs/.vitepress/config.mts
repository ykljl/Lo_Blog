import { defineConfig } from "vitepress";

export default defineConfig({
    // 网站基本信息
    base: "/Lo_Blog/",
    title: "Lo_Blog",
    description: "AI学习笔记",

    // 中文设置
    lang: "zh-CN",

    // 网站主题配置
    themeConfig: {
        // 顶部导航栏
        nav: [
            { text: "首页", link: "/" },
            { text: "AI 人工智能", link: "/AI/" },
        ],

        // 左侧侧边栏
        sidebar: {
            "/AI/": [
                {
                    text: "AI 人工智能",
                    items: [
                        { text: "AI 基础知识", link: "/AI/basics" },
                        { text: "大语言模型", link: "/AI/LLM" },
                        { text: "AI Agent", link: "/AI/Agent" },
                        { text: "API 开发", link: "/AI/API" },
                    ],
                },
            ],
        },

        // GitHub 仓库链接
        socialLinks: [
            { icon: "github", link: "https://github.com/ykljl/Lo_Blog" },
        ],

        // 编辑页面链接
        editLink: {
            pattern: "https://github.com/ykljl/Lo_Blog/edit/main/docs/:path",
            text: "在 GitHub 上编辑此页面",
        },
    },
});
