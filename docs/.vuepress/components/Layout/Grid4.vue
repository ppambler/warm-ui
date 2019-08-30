<template>
  <div class="grid4">
    <w-row class="demoRow">
      <w-col span="23" offset="1" :narrow-pc="{span:12, offset:12}">
        <div class="demoCol"></div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="24" :ipad="{span:12}">
        <div class="demoCol"></div>
      </w-col>
      <w-col span="24" :ipad="{span:12}">
        <div class="demoCol"></div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import Row from "../../../../src/row";
import Col from "../../../../src/col";
export default {
  name: "grid4",
  components: { "w-row": Row, "w-col": Col }
};
</script>

<style scoped>
.grid4 {
  margin-top: 1.5em;
}
.demoRow {
  flex-wrap: nowrap;
  margin-top: 10px;
  margin-bottom: -10px;
}

.demoCol {
  min-height: 100px;
  margin-top: 10px;
  background-color: #d3dce6;
}
@media (max-width: 576px) {
  .demoRow {
    flex-wrap: wrap;
  }
}
</style>