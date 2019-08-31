---
title: Toast 吐司
---
# Toast 吐司

> 展示一个短暂的操作反馈信息

## 简单使用

### 预览

<ClientOnly>
  <FeedBack-Toast1 />
</ClientOnly>

### 代码

``` html
<w-button @click="$toast('点击弹出提示')">上方弹出</w-button>
<w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
<w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
```

## 设置关闭按钮

### 预览

<ClientOnly>
  <FeedBack-Toast2 />
</ClientOnly>

### 代码

``` html
<w-button @click="onClickButton">Click Me！请你吃饭</w-button>
```

## 支持 HTML

### 预览

<ClientOnly>
  <FeedBack-Toast3 />
</ClientOnly>

### 代码

``` html
<w-button @click="onClickButton">Click Me！请你吃饭</w-button>
```

