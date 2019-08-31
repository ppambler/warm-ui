<template>
  <div class="input1">
    <w-input></w-input>
    <w-input value="中文"></w-input>
    <w-input value="中文" disabled></w-input>
    <w-input value="中文" readonly></w-input>
  </div>
</template>

<script>
import Input from "../../../../src/input";
export default {
  name: "input1",
  components: { "w-input": Input }
};
</script>

<style scoped>
.input1 {
  margin-top: 1.5em;
}
</style>