<template>
  <div class="collapse2">
    <w-collapse :selected.sync="selectedTab" single>
      <w-collapse-item title="title 1" name="1">{{text}}</w-collapse-item>
      <w-collapse-item title="title 2" name="2">{{text}}</w-collapse-item>
      <w-collapse-item title="title 3" name="3">{{text}}</w-collapse-item>
    </w-collapse>
    <h3>代码</h3>
  </div>
</template>

<script>
import WCollapse from "../../../../src/collapse";
import WCollapseItem from "../../../../src/collapse-item";
export default {
  name: "collapse2",
  components: { WCollapse, WCollapseItem },
  data() {
    return {
      selectedTab: ["2"],
      text: `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.collapse2 {
  margin-top: 1.5em;
  /* margin-bottom: 54px; */
}
</style>