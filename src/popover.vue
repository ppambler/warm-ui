<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "WarmPopover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if(this.visible === true) {
        this.$nextTick(()=>{
          document.body.appendChild(this.$refs.contentWrapper)
          let{width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          let eventHandler = () => {
            this.visible = false
            console.log('document 隐藏 popover')
            document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      } else {
        console.log('vm 隐藏 popover')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-flex;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  border: 1px solid red;
  position: absolute;
  transform: translateY(-100%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>