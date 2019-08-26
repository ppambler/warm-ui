<template>
  <div class="collapseItem">
    <div class="title" @click="open=!open">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarmCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$title-bgc: #fafafa;
$content-bgc: #fff;
.collapseItem {
   > .title {
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 0 8px;
    margin-top: -1px;
    background-color: $title-bgc;
    border-top: 1px solid $grey;
    border-bottom: 1px solid $grey;
  }
  &:first-child {
     > .title {
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
  }
  &:last-child {
     > .title:last-child {
      border-bottom: none;
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
     > .content {
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }
   > .content {
    padding: 8px;
    background-color: $content-bgc;
  }
}
</style>