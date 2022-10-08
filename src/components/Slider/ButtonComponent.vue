<template>
  <button  
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
</template>
<script>
export default {
	name: "button-component",
	props: {
		hoverText: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			hovered: false,
		};
	}
};
</script>
<style>
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
  .btn-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
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