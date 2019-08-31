<template>
  <div class="toast3">
    <w-button @click="onClickButton">Click Me！请你吃饭</w-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../../src/button";
import plugin from "../../../../src/plugin";
Vue.use(plugin);

export default {
  name: "toast3",
  components: {
    "w-button": Button
  },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:#ec7171;">请你吃顿好的！</strong>', {
        enableHtml: true,
        closeButton: {
          text: "真诚吗？",
          callback: () => {
            console.log("他说真诚吗？");
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
.toast3 {
  margin-top: 1.5em;
}
</style>