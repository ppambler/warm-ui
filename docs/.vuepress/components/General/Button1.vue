<template>
  <div class="button1">
    <w-button>默认按钮</w-button>
    <w-button icon="settings">默认按钮</w-button>
    <w-button :loading="true">默认按钮</w-button>
    <w-button disabled>禁用按钮</w-button>
  </div>
</template>

<script>
import Button from "../../../../src/button.vue";
export default {
  name: "button1",
  components: {
    "w-button": Button
  }
};
</script>
<style>
  .button1 {
    margin-top: 1.5em;
  }
</style>