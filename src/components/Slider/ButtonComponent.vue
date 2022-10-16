<template>
	<!-- big button -->
  <button
	v-if="size === 'big'"
  @mouseover="hovered = true"
  @mouseleave="hovered = false"
  :class="[hovered ? 'btn-inactive' : 'btn-active', 'btn']"
  >
    <span v-if="!hovered" class="btn-text">
      <slot></slot>
    </span>
    <span v-if="hovered" class="btn-text">
      {{hoverText}}
    </span>        
  </button>

	<!-- middle button -->
	<button
	v-if="size === 'middle'"
  @mouseover="hovered = true"
  @mouseleave="hovered = false"
  :class="[hovered ? 'btn-inactive' : 'btn-active', 'btn-middle']"
  >
    <span v-if="!hovered" class="btn-text--middle">
      <slot></slot>
    </span>
    <span v-if="hovered" class="btn-text--midde">
      {{hoverText}}
    </span>        
  </button>
</template>
<script>
export default {
	name: "button-component",
	props: {
		hoverText: {
			type: String,
			required: false,
		},
		size: {
			type: String,
			required: true,
			validator(value) {
				return ["big", "middle", "small"].includes(value);
			},
		}
	},
	data() {
		return {
			hovered: false,
		};
	},
	watch: {
		size(val, oldVal) {
			console.log("btn component recieve", val, oldVal);
		}
	}
};
</script>
<style scoped>
  .btn {
    width: 270px;
    height: 44px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px auto;   
  }
	.btn-middle {
    width: 217px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px auto;   
  }
  .btn-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fff;
  }
	.btn-text--middle {
		font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #fff;
	}
  .btn-active {
    background: #31AE54;
    
  }
  .btn-inactive {
    background: #9E9E9E;
  }
</style>