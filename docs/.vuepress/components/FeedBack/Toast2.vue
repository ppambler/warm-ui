<template>
  <div class="toast2">
    <w-button @click="onClickButton">Click Me！请你吃饭</w-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../../src/button";
import plugin from "../../../../src/plugin";
Vue.use(plugin);

export default {
  name: "toast2",
  components: {
    "w-button": Button
  },
  methods: {
    onClickButton() {
      this.$toast("吃啥？", {
        closeButton: {
          text: "随便",
          callback: () => {
            console.log("他说随便呀！");
          }
        }
      });
    }
  }
};
</script>

<style>
.warm-toast {
  z-index: 30 !important;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
}
.toast2 {
  margin-top: 1.5em;
}
</style>