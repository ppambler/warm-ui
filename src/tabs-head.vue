<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarmTabsHead",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm)=>{
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
};
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  $blue: #1890ff;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: -1px;
      border-bottom: 2px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>