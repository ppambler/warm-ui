---
title: Layout 布局
---

# Layout 布局

> 协助进行页面级整体布局。

## 上中下通栏布局

### 预览

<ClientOnly>
  <Layout-Layout1 />
</ClientOnly>

### 代码

```html
<w-layout>
  <w-header>header</w-header>
  <w-content>content</w-content>
  <w-footer>footer</w-footer>
</w-layout>
```

## 主体内容部分带侧边栏的上中下通栏布局

### 预览

<ClientOnly>
  <Layout-Layout2 />
</ClientOnly>

### 代码

```html
<w-layout>
  <w-header>header</w-header>
  <w-layout>
    <w-sider>sider</w-sider>
    <w-content>content</w-content>
  </w-layout>
  <w-footer>footer</w-footer>
</w-layout>
```

## 侧边栏带关闭按钮

### 预览

<ClientOnly>
  <Layout-Layout3 />
</ClientOnly>

### 代码

```html
<w-layout class="demoLayout">
  <w-header class="demoHeader">header</w-header>
  <w-layout class="demoLayout">
    <w-sider close-button>
      <div class="demoSider">sider</div>
    </w-sider>
    <w-content class="demoContent">content</w-content>
  </w-layout>
  <w-footer class="demoFooter">footer</w-footer>
</w-layout>
```

### 预览

<ClientOnly>
  <Layout-Layout4 />
</ClientOnly>

### 代码

```html
<w-layout class="demoLayout">
  <w-sider close-button>
    <div class="demoSider">sider</div>
  </w-sider>
  <w-layout class="demoLayout">
    <w-header class="demoHeader">header</w-header>
    <w-content class="demoContent">content</w-content>
    <w-footer class="demoFooter">footer</w-footer>
  </w-layout>
</w-layout>
```