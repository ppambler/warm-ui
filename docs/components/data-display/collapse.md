---
title: Collapse 折叠面板
---

# Collapse 折叠面板

> 可以折叠/展开的内容区域。

## 简单用法

> 可以同时展开多个面板，这个例子默认展开了第一个。

### 预览

<ClientOnly>
  <DataDisplay-Collapse1 />
</ClientOnly>

``` html
<w-collapse :selected.sync="selectedTab">
  <w-collapse-item title="title 1" name="1">{{text}}</w-collapse-item>
  <w-collapse-item title="title 2" name="2">{{text}}</w-collapse-item>
  <w-collapse-item title="title 3" name="3">{{text}}</w-collapse-item>
</w-collapse>
```

## 手风琴

> 手风琴，每次只打开一个 tab。

### 预览

<ClientOnly>
  <DataDisplay-Collapse2 />
</ClientOnly>

``` html
<w-collapse :selected.sync="selectedTab" single>
  <w-collapse-item title="title 1" name="1">{{text}}</w-collapse-item>
  <w-collapse-item title="title 2" name="2">{{text}}</w-collapse-item>
  <w-collapse-item title="title 3" name="3">{{text}}</w-collapse-item>
</w-collapse>
```

