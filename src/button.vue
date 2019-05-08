<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    // props: ['icon','iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left', //如果在使用g-button组件的时候，没有写icon-position特性的话，那么就会使用这个left作为默认参数
        validator (value) {
          // console.log(value) //拿到的是用户所传过来的参数
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display:inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
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
  }
</style>
