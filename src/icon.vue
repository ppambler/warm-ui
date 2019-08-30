<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./svg";
export default {
  name: "WarmIcon",
  props: ["name"]
};
</script>
<style lang="scss" scoped>
.g-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -.15em;

  fill: currentColor;
}
</style>
