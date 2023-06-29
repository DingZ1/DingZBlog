import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';
// 引入侧边栏
const sidebar = require('../docs/study/index');

export default defineUserConfig({
    title: '揽星河',
    description: '揽星河的个人博客',
    theme: recoTheme({
        home: '/',
        style: '@vuepress-reco/style-default',
        logo: '/images/logo.png',
        author: '定子',
        authorAvatar: '/images/logo.png',
        docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
        docsBranch: 'main',
        docsDir: 'example',
        lastUpdatedText: '',
        head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
        // series 为原 sidebar
        series: sidebar,
        navbar: [
            { text: '首页', link: '/', icon: 'Home' },
            { text: 'Categories', link: '/categories/reco/1/' },
            { text: '标签', link: '/tags/tag1/1/', icon: 'Tag' },
            {
                text: '星予',
                link: '/docs/study/',
                icon: 'StarReview',
            },
            { text: '茶语', link: '/blogs/leisure/', icon: 'EdtLoop' },
            {
                text: '面试',
                icon: 'Document',
                children: [
                    {
                        text: '面试官系列',
                        link: 'https://vue3js.cn/interview/',
                        //该元素将一直处于激活状态
                        // activeMatch: '/posts/design-pattern/'
                    },
                ],
            },
            {
                text: '实战项目',
                icon: 'Code',
                children: [
                    {
                        text: '网易云音乐',
                        link: 'https://vuepress-theme-reco.recoluan.com/docs/guide/folder-specification.html',
                    },
                    { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
                    { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
                ],
            },
        ],
        bulletin: {
            body: [
                {
                    type: 'text',
                    content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
                    style: 'font-size: 12px;',
                },
                {
                    type: 'hr',
                },
                {
                    type: 'title',
                    content: 'QQ 群',
                },
                {
                    type: 'text',
                    content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
                    style: 'font-size: 12px;',
                },
                {
                    type: 'hr',
                },
                {
                    type: 'title',
                    content: 'GitHub',
                },
                {
                    type: 'text',
                    content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
                    style: 'font-size: 12px;',
                },
                {
                    type: 'hr',
                },
                {
                    type: 'buttongroup',
                    children: [
                        {
                            text: '打赏',
                            link: '/docs/others/donate.html',
                        },
                    ],
                },
            ],
        },
        blogConfig: {
            tag: {
                location: 3, // 在正文后显示标签
                color: 'rgb(255, 99, 71)', // 可选，指定标签的颜色
            },
        },
        // commentConfig: {
        //   type: 'valie',
        //   // options 与 1.x 的 valineConfig 配置一致
        //   options: {
        //     // appId: 'xxx',
        //     // appKey: 'xxx',
        //     // placeholder: '填写邮箱可以收到回复提醒哦！',
        //     // verify: true, // 验证码服务
        //     // notify: true,
        //     // recordIP: true,
        //     // hideComments: true // 隐藏评论
        //   },
        // },
    }),
    // debug: true,
});
