module.exports = {
    // 插件
    plugins: {
        '@vuepress/back-to-top': {}
    },
    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/logo/small.png' }]
    ],
    theme: 'reco',
    title: '一念&成魔',
    description: '在一个崇高的目的支持下，不停地学习，即使慢、也一定会获得成功',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 2,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        subSidebar: 'auto',
        logo: '/logo/small.png',
        author: 'Tang Zheng Feng',
        // 备案 https://csdnimg.cn/pubfooter/images/gongan.png
        record: '浙ICP备XXXXX号',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        // 项目开始时间，只填写年份
        startYear: '2020',
        nav: [
            { text: '项目指南', link: '/guide/', icon: 'reco-document'},
            { text: '常见问题', link: '/problem/', icon: 'reco-faq'},
            { text: '更新日志', link: '/version/V2.6/', icon: 'reco-date'},
            { text: '捐赠支持', link: '/donation/', icon: 'reco-account'},
            { text: '体验地址', link: 'https://el-admin.xin', icon: 'reco-other'},
            // 下拉列表
            {
                text: 'Github',
                items: [
                    {
                        text: '前端源码',
                        link: 'https://github.com/elunez/eladmin-web'
                    },
                    {
                        text: '后端源码',
                        link: 'https://github.com/elunez/eladmin'
                    },
                ],
                icon: 'reco-github'
            },
            {
                text: 'Gitee',
                items: [
                    {
                        text: '前端源码',
                        link: 'https://gitee.com/elunez/eladmin-web'
                    },
                    {
                        text: '后端源码',
                        link: 'https://gitee.com/elunez/eladmin'
                    }
                ],
                icon: 'reco-mayun'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guide/',
                        '/guide/kslj',
                        '/guide/ksks',
                        '/guide/hdsc',
                        '/guide/qdsc',
                        '/guide/xmbs'
                    ]
                },
                {
                    title: '其它',
                    collapsable: false,
                    children: [
                        '/guide/gxdm',
                        '/guide/bqsm'
                    ]
                },
                {
                    title: '鸣谢',
                    collapsable: false,
                    children: [
                        '/guide/mx'
                    ]
                }
            ],
            '/donation/': [
                '/donation/',
            ],
            '/problem/': [
                '/problem/',
            ],
            '/version/': [
                {
                    title: '更新日志',
                    collapsable: false,
                    children: [
                        'V0.9',
                        'V0.8',
                        'V0.7'
                    ]
                }
            ]
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'elunez/eladmin-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '联系博主修改此页！'
    }
}

