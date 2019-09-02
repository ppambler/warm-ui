---
title: 快速上手
---
# 快速上手

## 使用之前

在使用 Warm UI 之前，我们假设您已经了解Vue、Vue组件、Vue单文件组件的基础知识。

## 使用构建工具

使用 Parcel 作为 Web 应用打包工具

具体做法如下：

①在本地找个合适的地方，创建一个项目目录，如叫`xxx`

```bash
mkdir xxx
```

②在`xxx`下，创建一个`package.json`文件

```bash
cd xxx
yarn init -y
```

③创建`index.html`以及 `src/app.js`，并在 `index.html` 里边引入 `app.js`

④安装 `parcel`、 `vue` 以及 `warm-ui-wheel`

```bash
yarn add parcel
yarn add vue
yarn add warm-ui-wheel
```

⑤在`package.json`里边添加 `alias`字段：

```json
"alias": {
  "vue": "./node_modules/vue/dist/vue.common.js"
}
```

⑥在 `app.js` 里边引入 `vue` 、`warm-ui-wheel`、`warm-ui.css`

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

⑦在`index.html`里边使用组件

```html
<body>
  <div id="app">
    <w-button>Default</w-button>
    <w-icon name="smile"></w-icon>
  </div>
  <script src="./src/app.js"></script>
</body>
```

⑧打包，构建应用

```bash
npx parcel index.html --no-cache
```

根据终端提示，在浏览器中打开 <http://localhost:1234/>

## 特别提醒

使用  `warm-ui-wheel` 时，您需要使用 `border-box` 盒模型，而不是默认的 `content-box`， 如果不这样做，那么就会影响 `warm-ui-wheel` 的默认样式。CSS代码示例如下：

```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

