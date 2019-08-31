<template>
  <div class="tabs2">
    <w-tabs :selected="selected">
      <w-tabs-head>
        <w-tabs-item name="1">Tab 1</w-tabs-item>
        <w-tabs-item name="2" disabled>Tab 2</w-tabs-item>
        <w-tabs-item name="3">Tab 3</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="1">content 1</w-tabs-pane>
        <w-tabs-pane name="2">content 2</w-tabs-pane>
        <w-tabs-pane name="3">content 3</w-tabs-pane>
      </w-tabs-body>
    </w-tabs>
  </div>
</template>

<script>
import WTabs from "../../../../src/tabs";
import WTabsHead from "../../../../src/tabs-head";
import WTabsBody from "../../../../src/tabs-body";
import WTabsItem from "../../../../src/tabs-item";
import WTabsPane from "../../../../src/tabs-pane";
export default {
  name: "tabs2",
  components: {
    WTabs,
    WTabsHead,
    WTabsBody,
    WTabsItem,
    WTabsPane
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.tabs2 {
  margin-top: 1.5em;
}
</style>