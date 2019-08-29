const path = require('path')
module.exports = {
  base: '/warm-ui/',
  title: 'Warm UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
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
        collapsable: false,
        children: [
          {
            title: '通用',
            collapsable: true,
            children: [
              '/components/general/button',
              '/components/general/icon',
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