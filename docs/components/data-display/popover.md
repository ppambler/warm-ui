---
title: Popover 气泡卡片
---

# Popover 气泡卡片

> 点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 支持 HTML

### 预览

<ClientOnly>
  <DataDisplay-Popover1 />
</ClientOnly>

### 代码

``` html
<w-popover>
  <w-button>上方弹出</w-button>
  <template slot="content">弹出内容</template>
</w-popover>
<w-popover position="bottom">
  <w-button>下方弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">how are you？</strong>
  </template>
</w-popover>
<w-popover position="left">
  <w-button>左边弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">I'm fine, thank you.</strong>
  </template>
</w-popover>
<w-popover position="right">
  <w-button>右边弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">Not very good.</strong>
  </template>
</w-popover>
```

## 将触发方式改为 hover

### 预览

<ClientOnly>
  <DataDisplay-Popover2 />
</ClientOnly>

### 代码

``` html
<w-popover trigger="hover">
  <w-button>上方弹出</w-button>
  <template slot="content">弹出内容</template>
</w-popover>
<w-popover position="bottom" trigger="hover">
  <w-button>下方弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">how are you？</strong>
  </template>
</w-popover>
<w-popover position="left" trigger="hover">
  <w-button>左边弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">I'm fine, thank you.</strong>
  </template>
</w-popover>
<w-popover position="right" trigger="hover">
  <w-button>右边弹出</w-button>
  <template slot="content">
    <strong style="color:#ec7171;">Not very good.</strong>
  </template>
</w-popover>
```

