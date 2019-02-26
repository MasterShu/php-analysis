module.exports = {
    title: 'PHP Analysis',
    description: 'PHP7 source code analysis',
    // base: '/php-analysis/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'PHP Anaylsis',
            description: 'PHP7 源码探究'
        },
        '/en/': {
            lang: 'en-US',
            title: 'PHP Analysis',
            description: 'PHP7 source code analysis'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ],
    themeConfig: {
        repo: 'https://github.com/MasterShu/php-analysis',
        editLinks: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    '/prepare/': getSidebar('zh')
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                sidebar: {
                    '/prepare/': getSidebar('en')
                }
            },
        }
    }
}

function getSidebar(lang) {
    const title = {
        prepare: {
            'zh': '开始吧！',
            'en': 'Prepare'
        }
    }
    return [
        {
            title: title.prepare[lang],
            collapsable: false,
            children: [
                '',
                'directories',
                'environment'
            ]
        }
    ]
}