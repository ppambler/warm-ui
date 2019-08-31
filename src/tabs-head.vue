<template>
  <div class="tabs-head" ref="head">
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
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.updateLinePosition(vm);
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #1890ff;
$border-color: #ddd;
.tabs-head {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: $tabs-height;
  border-bottom: 1px solid $border-color;
   > .line {
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
   > .actions-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    margin-left: auto;
  }
}
</style>