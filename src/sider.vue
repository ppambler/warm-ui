<template>
  <div class="wrapper">
    <transition name="slide-fade">
      <div class="sider" v-if="visible" key="sider">
        <slot></slot>
      </div>
    </transition>
    <g-button class="sider-btn" v-if="closeButton" :icon="icon" @click="showSider"></g-button>
  </div>
</template>

<script>
import Button from "./button";
export default {
  name: "WarmSider",
  components: {
    "g-button": Button
  },
  props: {
    closeButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true,
      icon: "left"
    };
  },
  methods: {
    showSider() {
      if (this.visible) {
        this.visible = false;
        this.icon = "right";
      } else {
        this.visible = true;
        this.icon = "left";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.sider-btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(100%) translateY(-50%);
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1, .5, .8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

