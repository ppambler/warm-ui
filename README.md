# ☀️ Warm UI 

[![Build Status](https://travis-ci.org/ppambler/warm-ui.svg?branch=master)](https://travis-ci.org/ppambler/warm-ui)

## 介绍

为了熟悉对 Vue 的使用，以及对组件化开发的理解，而制作的一个**基于 Vue**  的 UI 组件库！

## 安装

使用 yarn / npm 安装：

``` bash
yarn add warm-ui-wheel
# or
npm install warm-ui-wheel
```

*注：warm-ui 这个名字已经被他人占用了，我只好改为 warm-ui-wheel*

## 开始使用

使用本 UI 组件库之前，请在 CSS 中开启 border-box，否则会影响样式。代码示例如下：

``` css
*, *::before, *::after {
  border-sizing: border-box;
}
```

引入 warm-ui-wheel：

``` js
import Vue from 'vue'
import { Button, Icon } from 'warm-ui-wheel'
import 'warm-ui-wheel/dist/warm-ui.css'

new Vue({
  el: '#app',
  components: {
    'w-button': Button,
    'w-icon': Icon
  }
})
```

## 文档

[Warm UI](https://ppambler.github.io/warm-ui/)

## 提问

欢迎提问：[Issues · ppambler/warm-ui](https://github.com/ppambler/warm-ui/issues)

## 变更记录

- 简单轮子：按钮（Button）、图标（Icon）、输入框（Input）、网格（Grid）、布局(Layout)、吐司（Toast）、标签页（Tabs）、气泡卡片（Popover）、折叠面板（Collapse）

## 联系方式

- email：allinlbj@gmail.com

## 贡献代码

感谢以下贡献者😄：

[![Ambler](https://avatars3.githubusercontent.com/u/36479648?s=40&v=4)](https://github.com/ppambler/warm-ui/graphs/contributors)