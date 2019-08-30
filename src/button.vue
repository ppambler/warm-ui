<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <!-- 安装书写规范要求，这得要自闭合，但是自闭合之后后边的content无法渲染，或许这是工具出问题的缘故-->
    <!-- <g-icon class="icon" v-if="icon" :name="icon"/> -->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "WarmButton",
  components: {
    "g-icon": Icon
  },
  // props: ['icon','iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left", //如果在使用g-button组件的时候，没有写icon-position特性的话，那么就会使用这个left作为默认参数
      validator(value) {
        // console.log(value) //拿到的是用户所传过来的参数
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
$disabled-bgc: #f5f5f5;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  padding: 0 1em;
  font-size: $font-size;
  vertical-align: middle;
  background: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
   > .content {
    order: 2;
    vertical-align: top;
  }
   > .icon {
    order: 1;
    margin-right: .1em;
  }
  // 如果这个按钮元素有icon-right的class，那么就调换一下位置吧！
  &.icon-right {
     > .content {
      order: 1;
    }
     > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
   > .loading {
    animation: spin 1s infinite linear;
  }
  &[disabled] {
    background-color: $disabled-bgc;
    cursor: not-allowed;
  }
  &[disabled]:hover {
    border-color: $border-color;
  }
}
</style>
