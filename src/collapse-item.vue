<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">{{title}}</div>
    <div class="content" ref="content" v-if="open">
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
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", names => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
$content-bgc: #fff;
.collapseItem {
   > .title {
    display: flex;
    align-items: center;
    min-height: 46px;
    padding: 0 16px;
    margin-top: -1px;
    background-color: lighten($grey, 8%);
    border-top: 1px solid $grey;
    border-bottom: 1px solid $grey;
    cursor: pointer;
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
    min-height: 42px;
    padding: 16px;
    background-color: $content-bgc;
  }
}
</style>