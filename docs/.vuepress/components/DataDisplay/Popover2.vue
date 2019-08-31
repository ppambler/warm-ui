<template>
  <div class="popover2">
    <w-popover trigger="hover">
      <w-button>上方弹出</w-button>
      <template slot="content">弹出内容</template>
    </w-popover>
    <w-popover position="bottom" trigger="hover">
      <w-button>下方弹出</w-button>
      <template slot="content">
        <strong style="color:#ec7171;">how are you？</strong>
      </template>
    </w-popover>
    <w-popover position="left" trigger="hover">
      <w-button>左边弹出</w-button>
      <template slot="content">
        <strong style="color:#ec7171;">I'm fine, thank you.</strong>
      </template>
    </w-popover>
    <w-popover position="right" trigger="hover">
      <w-button>右边弹出</w-button>
      <template slot="content">
        <strong style="color:#ec7171;">Not very good.</strong>
      </template>
    </w-popover>
  </div>
</template>

<script>
import WButton from "../../../../src/button";
import WPopover from "../../../../src/popover";
export default {
  name: "popover1",
  components: { WButton, WPopover }
};
</script>

<style scoped>
.popover2 {
  margin-top: 1.5em;
}
</style>