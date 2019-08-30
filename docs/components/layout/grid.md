---
title: Grid 栅格
---

# Grid 栅格

> 24 栅格系统。

## 24格网格

### 预览

<ClientOnly>
  <Layout-Grid1 />
</ClientOnly>

### 代码

```html
<w-row class="demoRow">
  <w-col span="24" class="demoCol">
      <div>24</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="8" class="demoCol">
    <div>8</div>
  </w-col>
  <w-col span="8" class="demoCol">
    <div>8</div>
  </w-col>
  <w-col span="8" class="demoCol">
    <div>8</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="6" class="demoCol">
    <div>6</div>
  </w-col>
  <w-col span="6" class="demoCol">
    <div>6</div>
  </w-col>
  <w-col span="6" class="demoCol">
    <div>6</div>
  </w-col>
  <w-col span="6" class="demoCol">
    <div>6</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
  <w-col span="4" class="demoCol">
    <div>4</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
  <w-col span="2" class="demoCol">
    <div>2</div>
  </w-col>
</w-row>
```

## 设置 gutter

### 预览

<ClientOnly>
  <Layout-Grid2 />
</ClientOnly>

### 代码

```html
<w-row class="demoRow" gutter="20">
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
</w-row>
```

## 设置空隙

### 预览

<ClientOnly>
  <Layout-Grid3 />
</ClientOnly>

### 代码

```html
<w-row class="demoRow" gutter="10">
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8" offset="8">
    <div class="demoCol">8</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="6" offset="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6" offset="6">
    <div class="demoCol">6</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4" offset="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4" offset="8">
    <div class="demoCol">4</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
</w-row>
```

## 响应式布局

### 预览

<ClientOnly>
  <Layout-Grid4 />
</ClientOnly>

### 代码

```html
<w-row class="demoRow">
  <w-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
    <div class="demoCol">1</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="24" :ipad="{span:12}">
    <div class="demoCol">12</div>
  </w-col>
  <w-col span="24" :ipad="{span:12}">
    <div class="demoCol">12</div>
  </w-col>
</w-row>
```