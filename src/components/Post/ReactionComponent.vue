<template>
  <div class="reaction__container">
    <div class="reaction__list">
      <div class="reaction__item btn--left btn--grey btn--align-center">
        <div class="resizable-star">
          <icon-component name="StarIcon" />
        </div>
        <div class="icon-text star">Star</div>
      </div>
      <div class="reaction__item star btn--middle btn--align-center">{{stargazersCount}}</div>
      <div class="reaction__item btn--middle btn--grey btn--align-center">
        <div class="resizable-fork">
          <icon-component name="ForkIcon" />
        </div>
        <div class="icon-text fork">Fork</div>
      </div>
      <div class="reaction__item fork btn--right btn--align-center">{{forksCount}}</div>
    </div>
  </div>
</template>
<script>
import IconComponent from "@/icons/IconComponent.vue";


export default {
	name: "reaction-component",
	components: {
		IconComponent,
	},
	props: {
		stargazersCount: {
			type: Number,
			required: false
		},
		forksCount: {
			type: Number,
			required: false
		}
	}
};
</script>
<style scoped>
ul {
  padding-inline-start: 0;
}
.reaction__list {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.reaction__item {
  color: #262626;
  min-width: 14px;
  display: flex;
  align-items: center;
}
.star {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #24292e;
}
.fork {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #24292e;
}
/* Github buttons */
.btn--left {
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 0 12px;
  height: 28px;
  text-align: center;
}
.btn--middle {
  border: 1px solid rgba(27, 31, 35, 0.15);
  padding: 0 12px;
  height: 28px;
  display: flex;
}
.btn--right {
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0 12px;
  height: 28px;
  text-align: center;
}
.btn--grey {
  background: #fafbfc;
}
.btn--align-center {
  align-items: center;
  justify-content: center;
}
.resizable-star {
  width: 14px;
}
.resizable-fork {
  width: 12px;
}
.reaction__item > div {
  display: inline-block;
}
.icon-text {
  margin-left: 5px;
}
</style>
