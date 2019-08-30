<template>
  <div class="button1">
    <w-button>Default</w-button>
    <w-button disabled>Disabled</w-button>
    <w-button icon="left">Icon</w-button>
    <w-button icon="right" icon-position="right">Icon</w-button>
    <w-button loading>Loading</w-button>
    <w-button :loading="isLoading" @click="isLoading = !isLoading">Click me!</w-button>
  </div>
</template>

<script>
import Button from "../../../../src/button.vue";
export default {
  name: "button1",
  components: {
    "w-button": Button
  },
  data: function() {
    return {
      isLoading: true
    };
  }
};
</script>
<style>
.button1 {
  margin-top: 1.5em;
}
</style>