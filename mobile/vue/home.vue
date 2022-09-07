<template>
	<div class="home">
		<!-- <van-nav-bar title="首页" class="van-nav-bar" /> -->
		<div class="home-body">
			<h1 class="home__title">
				<img src="mobile/img/zhichang.png">
				<span>Zc & Vant</span>
			</h1>
			<h2 class="home__desc">VUE 学习教程，系统认知VUE内部原理，摆脱前端小白</h2>
			<van-cell-group title="教材">
			  <van-cell title="说明" is-link @click="selected('/study/study_0')"/>
			  <van-cell title="第一课: 初识VUE" is-link @click="selected('/study/study_1')"/>
			  <van-cell title="第二课: VUE常用指令" is-link @click="selected('/study/study_2')"/>
			  <van-cell title="第三课: VUE属性" is-link @click="selected('/study/study_3')"/>
			  <van-cell title="第四课: VUE生命周期" is-link @click="selected('/study/study_4')"/>
			  <van-cell title="第五课: VUE组件" is-link @click="selected('/study/study_5')"/>
			  <van-cell title="第六课: 混入" is-link @click="selected('/study/study_6')"/>
			  <van-cell title="第七课: 其他" is-link @click="selected('/study/study_7')"/>
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
			}
		},
		methods:{
			selected(path){
				this.$router.push({path: path})
			}
		},
		mounted() {
		}
	}
</script>

<style>
/* 	.van-nav-bar {
		box-shadow: 0px 0px 5px 0px #ccc;
	} */

	.home .home-body {
		box-sizing: border-box;
		width: 100%;
		margin: auto;
		max-width: 800px;
		min-height: 100vh;
		padding: 46px 20px 20px;
		background: #fff;
	}

	.home__title {
		margin: 0 0 16px;
		font-size: 28px;
	}

	.home__title img {
		width: 32px;
	}

	.home__title,
	.home__desc {
		padding-left: 16px;
		font-weight: 400;
		line-height: 1;
		user-select: none;
	}

	.home__title span {
		margin-left: 16px;
	}

	.home__title img,
	.home__title span {
		display: inline-block;
		vertical-align: middle;
	}
	.home__desc {
	    margin: 0 0 20px;
	    color: rgba(69,90,100,.6);
	    font-size: 14px;
	}

	.home .van-nav-bar {
		background-color: #003a8c;
	}

	.home .van-nav-bar .van-nav-bar__title {
		color: #ffffff !important;
	}
</style>
