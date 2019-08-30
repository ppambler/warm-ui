<template>
  <div class="wrapper">
    <div class="icon1">
      <w-icon class="icon" name="smile"></w-icon>
      <w-icon class="icon" name="check-circle"></w-icon>
      <w-icon class="icon" name="sync"></w-icon>
      <w-icon class="icon" name="comment"></w-icon>
      <w-icon class="icon" name="bug"></w-icon>
      <w-icon class="icon" name="edit-square"></w-icon>
    </div>
  </div>
</template>

<script>
import Icon from "../../../../src/icon";
export default {
  name: "icon1",
  components: { "w-icon": Icon }
};
</script>

<style scoped>
.wrapper {
  margin-top: 1.5em;
}
/* 没有这个，这几个icon的布局就是一条垂直的棍子 */
.icon1 {
  display: inline;
}
/* 默认是1em，为了预览效果好点，放大1em */
.icon1 > .icon {
  width: 2em;
  height: 2em;
}
</style>