<template>
  <div class="icon__container">
    <!-- <div :style="{ width: size }"> -->
    <div>
      <component :is="name" />
    </div>
    <div id="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import * as icons from "./variants";
export default {
  name: "icon-component",
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      },
    },
    // size: {
    //   type: String,
    //   required: false,
    // },
  },
};
</script>
<style scoped>
.icon__container {
  /* display: flex; */
}
#svg {
  width: 150px;
}
/* #text {
  flex-grow: 1;
} */
</style>
