<template>
  <div class="grid1">
    <w-row class="demoRow">
      <w-col span="24" class="demoCol">
        <div>24</div>
      </w-col>
    </w-row>
    <w-row class="demoRow">
      <w-col span="8" class="demoCol">
        <div>8</div>
      </w-col>
      <w-col span="8" class="demoCol">
        <div>8</div>
      </w-col>
      <w-col span="8" class="demoCol">
        <div>8</div>
      </w-col>
    </w-row>

    <w-row class="demoRow">
      <w-col span="6" class="demoCol">
        <div>6</div>
      </w-col>
      <w-col span="6" class="demoCol">
        <div>6</div>
      </w-col>
      <w-col span="6" class="demoCol">
        <div>6</div>
      </w-col>
      <w-col span="6" class="demoCol">
        <div>6</div>
      </w-col>
    </w-row>

    <w-row class="demoRow">
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
      <w-col span="4" class="demoCol">
        <div>4</div>
      </w-col>
    </w-row>

    <w-row class="demoRow">
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
      <w-col span="2" class="demoCol">
        <div>2</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import Row from "../../../../src/row";
import Col from "../../../../src/col";
export default {
  name: "grid1",
  components: { "w-row": Row, "w-col": Col }
};
</script>

<style>
.grid1 {
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
}

.demoCol:nth-child(odd) {
  background-color: #d3dce6;
}

.demoCol:nth-child(even) {
  background-color: #f8f8f9;
}
</style>