<template >
	<div>
		<button	class="btn-active btn">
			<div class="btn-content">
				<div class="btn-text">{{text}}</div>
				<div class="btn-icon">
					<img src="@/assets/img/login/github.png" alt="github"/>						
				</div>	
			</div>
  </button>
	</div>
</template>
<script>

export default {
	name: "login-button",

	props: {
		text: {
			type: String,
			required: false,
			default: "Authorize with github"
		} 
	}

};
</script>
<style scoped>
	.btn {
    width: 252px;
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
		letter-spacing: -0.15px;
	color: #FFFFFF;
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
	.btn-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn-icon {
		margin-left: 12px;
	}
</style>