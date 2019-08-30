---
title: Button 按钮
---

# Button 按钮

> 何时使用：标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 简单用法

### 预览

<ClientOnly>
  <General-Button1/>
</ClientOnly>

### 代码

```html
<w-button>Default</w-button>
<w-button disabled>Disabled</w-button>
<w-button icon="left">Icon</w-button>
<w-button icon="right" icon-position="right">Icon</w-button>
<w-button loading>Loading</w-button>
<w-button :loading="isLoading" @click="isLoading = !isLoading">Click me!</w-button>
```

## 一组按钮

### 预览

<ClientOnly>
  <General-Button2 />
</ClientOnly>

### 代码

```html
<w-button-group>
  <w-button icon="left">上一页</w-button>
  <w-button>更多</w-button>
  <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
```