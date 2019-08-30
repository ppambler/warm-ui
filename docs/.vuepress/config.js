const path = require('path')
module.exports = {
  base: '/warm-ui/',
  title: '☀ Warm UI',
  description: '一个好用的 UI 框架',
  dest: './docs-dist',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ppambler/warm-ui' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          {
            title: '通用',
            collapsable: true,
            children: [
              '/components/general/button',
              '/components/general/icon',
            ]
          },
          {
            title: '布局',
            collapsable: true,
            children: [
              '/components/layout/grid',
              '/components/layout/layout',
            ]
          },
          {
            title: '数据录入',
            collapsable: true,
            children: [
              '/components/data-entry/input',
            ]
          },
          {
            title: '数据展示',
            collapsable: true,
            children: [
              '/components/data-display/collapse',
              '/components/data-display/popover',
              '/components/data-display/tabs',
            ]
          },
          {
            title: '反馈',
            collapsable: true,
            children: [
              '/components/feedback/toast',
            ]
          },
        ]
      },

    ]
  },
  // scss: {
  //   includePaths: [path.join(__dirname, '../../styles')]
  // }
}