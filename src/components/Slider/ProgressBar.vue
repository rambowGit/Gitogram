<template >
  <div class="bar">
    <div ref="progress" :class={active} class="progress" ></div>    
  </div>
</template>
<script>

export default {
	name: "progress-bar",
	props: {
		activated: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			active: false,
		};
	},
	emits: ["onFinish"],
	methods: {
		emitOnFinish() {
			this.$emit("onFinish");
		}
	},
	mounted() {
		// TODO: избавиться от setTimeout
		this.$nextTick(() => {
			setTimeout(() =>{
				this.active = this.activated;
			}, 0);
		});

		this.$refs.progress.addEventListener("transitionend", this.emitOnFinish);
		
	},
};
</script>
<style scoped>
.bar{
	width: 100%;
  background: rgba(49, 174, 84, 0.3);
  border-radius: 1px;
  height: 2px;
  position: relative;
	overflow: hidden;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #31AE54;
  border-radius: 1px;
	width: 0;
	transition: width 5s;
}
.active {
  width: 100%;
}
</style>