<template>
    <transition name="slide">
      <div class="sider" v-if="visible" key="close">
        <slot></slot>
        <button @click="visible=false">close</button>
      </div>
      <div class="sider-show" v-else key="show">
        <button @click="visible=true">show</button>
      </div>
    </transition>
</template>

<script>
export default {
  name: "WarmSider",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.sider-show {
  position: fixed;
  top: calc(50vh - 0.5em);
  left: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
// .slide-enter, .slide-leave-to {
//   margin-left: -150px; //这个得根据用户设置sider的宽度来确定
// }
</style>

