<template>
  <div class="layout3">
    <w-layout class="demoLayout">
      <w-header class="demoHeader">header</w-header>
      <w-layout class="demoLayout">
        <w-sider close-button>
          <div class="demoSider">sider</div>
        </w-sider>
        <w-content class="demoContent">content</w-content>
      </w-layout>
      <w-footer class="demoFooter">footer</w-footer>
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
  name: "layout3",
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
.layout3 {
  margin-top: 1.5em;
}
.demoLayout > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.demoHeader {
  height: 50px;
  background-color: #f5f5f5;
}

.demoSider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  background-color: #eee;
}

.demoContent {
  height: 150px;
  background-color: #d3dce6;
}

.demoFooter {
  height: 50px;
  background-color: #f5f5f5;
}
</style>