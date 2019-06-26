# Warm UI 

[![Build Status](https://travis-ci.org/ppambler/warm-ui.svg?branch=master)](https://travis-ci.org/ppambler/warm-ui)

## 介绍

为了熟悉对Vue的使用，以及对组件化开发的理解，而制作的一个**基于 Vue**  的 UI 组件库！

## 安装

```bash
npm i --save warm-ui-test-1
```

## 开始使用

1. 添加 CSS 样式

   使用本UI组件库之前，请在 CSS 中开启 border-box：

   ```css
   *,*::before,*::after {
     border-sizing: border-box;
   }
   ```

    IE 8 及以上浏览器都支持此样式。

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

   ```css
   :root {
     --button-height: 32px;
     --font-size: 14px;
     --button-bg: white;
     --button-active-bg: #eee;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
   }
   body {
   	font-size: var(--font-size);
   }
   ```

   IE 15 及以上浏览器都支持此样式。

2. 引入 warm-ui

   ```vue
   import {Button, Icon, ButtonGroup} from 'warm-ui-test-1'
   import 'warm-ui-test-1/dist/index.css'
   export default {
     name: 'app',
     components: {
       'g-button': Button,
       'g-button-group': ButtonGroup,
       'g-icon': Icon
     }
   }
   ```

3.  引入 svg symbols

   ```html
   <script src="//at.alicdn.com/t/font_1181189_o490ycjikz.js"></script>
   ```

   

## 文档



## 提问



## 变更记录



## 联系方式



## 贡献代码

