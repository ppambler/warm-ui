---
title: Input 输入框
---

# Input 输入框

> 通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 简单用法

### 预览

<ClientOnly>
  <DataEntry-Input1 />
</ClientOnly>

### 代码

```html
<w-input></w-input>
<w-input value="中文"></w-input>
<w-input value="中文" disabled></w-input>
<w-input value="中文" readonly></w-input>
```

## 双向绑定

### 预览

<ClientOnly>
  <DataEntry-Input2 />
</ClientOnly>

### 代码

```html
<w-input v-model="value"></w-input>
<div>value：{{value}}</div>
```
