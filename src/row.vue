<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WarmRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  created() {
    console.log('row created')
  },
  mounted() {
    console.log('row mounted')
    console.log(this.$children)
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
};

// 关于对creaded 和 mounted 这两个钩子 的理解
var div = document.createElement('div') // created
var childDiv = document.createElement('div') // child created
div.appendChild(childDiv) // child mounted
document.body.appendChild(div) // mounted
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
