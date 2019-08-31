<template>
  <div class="input2">
    <w-input v-model="value"></w-input>
    <div class="value">value：{{value}}</div>
  </div>
</template>

<script>
import Input from "../../../../src/input";
export default {
  name: "input2",
  components: { "w-input": Input },
  data() {
    return {
      value: "1"
    };
  }
};
</script>

<style scoped>
.input2 {
  margin-top: 1.5em;
}
.value {
  margin-top: 15px;
}
</style>