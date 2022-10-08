<template>
  <div class="icon__container">
    <div>
      <component :is="name" />
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
