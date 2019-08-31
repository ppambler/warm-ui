<template>
  <div class="tabs1">
    <w-tabs :selected="selected">
      <w-tabs-head>
        <w-tabs-item name="1">1</w-tabs-item>
        <w-tabs-item name="2">2</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="1">content 1</w-tabs-pane>
        <w-tabs-pane name="2">content 2</w-tabs-pane>
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
  name: "tabs1",
  components: {
    WTabs,
    WTabsHead,
    WTabsBody,
    WTabsItem,
    WTabsPane
  },
  data() {
    return {
      selected: '2'
    }
  }
};
</script>

<style scoped>
.tabs1 {
  margin-top: 1.5em;
}
</style>