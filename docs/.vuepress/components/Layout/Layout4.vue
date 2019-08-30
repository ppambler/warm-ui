<template>
  <div class="layout4">
    <w-layout class="demoLayout">
      <w-sider close-button>
        <div class="demoSider">sider</div>
      </w-sider>
      <w-layout class="demoLayout">
        <w-header class="demoHeader">header</w-header>
        <w-content class="demoContent">content</w-content>
        <w-footer class="demoFooter">footer</w-footer>
      </w-layout>
    </w-layout>
  </div>
</template>

<script>
import Layout from "../../../../src/layout";
import Header from "../../../../src/header";
import Sider from "../../../../src/sider";
import Content from "../../../../src/content";
import Footer from "../../../../src/footer";
export default {
  name: "layout4",
  components: {
    "w-layout": Layout,
    "w-header": Header,
    "w-sider": Sider,
    "w-content": Content,
    "w-footer": Footer
  }
};
</script>

<style scoped>
.layout4 {
  margin-top: 1.5em;
}
.demoHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
}

.demoSider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 250px;
  background-color: #eee;
}

.demoContent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #d3dce6;
}

.demoFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
}
</style>