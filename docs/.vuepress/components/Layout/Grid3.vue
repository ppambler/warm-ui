!<template>
  <div class="grid3">
    <w-row class="demoRow" gutter="10">
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8" offset="8">
        <div class="demoCol">8</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="6" offset="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6" offset="6">
        <div class="demoCol">6</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="4">
        <div class="demoCol">4</div>
      </w-col>
      <w-col span="4" offset="4">
        <div class="demoCol">4</div>
      </w-col>
      <w-col span="4" offset="8">
        <div class="demoCol">4</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2">
        <div class="demoCol">2</div>
      </w-col>
      <w-col span="2" offset="2">
        <div class="demoCol">2</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import Row from "../../../../src/row";
import Col from "../../../../src/col";
export default {
  name: "grid3",
  components: { "w-row": Row, "w-col": Col }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.grid3 {
  margin-top: 1.5em;
}
.demoRow {
  margin-top: 10px;
}

.demoCol {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: #d3dce6;
}
</style>