<template>
	<!-- big button -->
  <button
	v-if="size === 'big'"
	@click="$emit('onFollowClick')"
  :class="[loading || theme === 'grey' ? 'btn-inactive' :  'btn-active', 'btn']"
  >
    <span class="btn-text">
      <div v-if="!loading">
				<slot></slot>
			</div>
			<div v-else	
				class="btn-inactive spinner"		
			>
			<icon-component name="SpinnerIcon"/>
			</div>
		
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
import IconComponent from "../../icons/IconComponent.vue";
export default {
	name: "button-component",
	components: {
		IconComponent
	},
	emits: ["onFollowClick"],
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
		},
		theme: {
			type: String,
			required: false
		},
		loading: {
			type: Boolean
		}
	},
	data() {
		return {
			hovered: false,
		};
	},
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
/* spinner */
.spinner-container {
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
}
.spinner {
	color: #fff;
	display: inline-block;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>