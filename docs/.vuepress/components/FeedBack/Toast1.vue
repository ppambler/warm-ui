<template>
  <div class="toast1">
    <w-button @click="$toast('点击弹出提示')">上方弹出</w-button>
    <w-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</w-button>
    <w-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</w-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../../src/button";
import plugin from "../../../../src/plugin";
Vue.use(plugin);

export default {
  name: "toast1",
  components: {
    "w-button": Button
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
.toast1 {
  margin-top: 1.5em;
}
</style>