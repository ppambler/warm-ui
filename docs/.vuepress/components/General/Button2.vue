!<template>
  <div class="button2">
    <w-button-group>
      <w-button icon="left">上一页</w-button>
      <w-button>更多</w-button>
      <w-button icon="right" icon-position="right">下一页</w-button>
    </w-button-group>
  </div>
</template>

<script>
import Button from "../../../../src/button.vue";
import ButtonGroup from "../../../../src/button-group";
export default {
  name: "button2",
  components: { "w-button": Button, "w-button-group": ButtonGroup }
};
</script>

<style scoped>
.button2 {
  margin-top: 1.5em;
}
</style>