<template>
  <div class="collapse1">
    <w-collapse :selected.sync="selectedTab">
      <w-collapse-item title="title 1" name="1">{{text}}</w-collapse-item>
      <w-collapse-item title="title 2" name="2">{{text}}</w-collapse-item>
      <w-collapse-item title="title 3" name="3">{{text}}</w-collapse-item>
    </w-collapse>
  </div>
</template>

<script>
import WCollapse from "../../../../src/collapse";
import WCollapseItem from "../../../../src/collapse-item";
export default {
  name: "collapse1",
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
.collapse1 {
  margin-top: 1.5em;
  margin-bottom: 54px;
}
</style>