---
title: Tabs 标签页
---

# Tabs 标签页

> 选项卡切换组件

## 简单用法

### 预览

<ClientOnly>
  <DataDisplay-Tabs1 />
</ClientOnly>

### 代码

``` html
<w-tabs :selected="selected">
  <w-tabs-head>
    <w-tabs-item name="1">Tab 1</w-tabs-item>
    <w-tabs-item name="2">Tab 2</w-tabs-item>
    <w-tabs-item name="3">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="1">content 1</w-tabs-pane>
    <w-tabs-pane name="2">content 2</w-tabs-pane>
    <w-tabs-pane name="3">content 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

## 禁用某一项

### 预览

<ClientOnly>
  <DataDisplay-Tabs2 />
</ClientOnly>

### 代码

``` html
<w-tabs :selected="selected">
  <w-tabs-head>
    <w-tabs-item name="1">Tab 1</w-tabs-item>
    <w-tabs-item name="2" disabled>Tab 2</w-tabs-item>
    <w-tabs-item name="3">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="1">content 1</w-tabs-pane>
    <w-tabs-pane name="2">content 2</w-tabs-pane>
    <w-tabs-pane name="3">content 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

