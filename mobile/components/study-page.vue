<template>
	<div class="study-page" :style="{'max-width':maxWidth}">
		<van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" class="van-nav-bar" />
		<div style="padding-top: 10px;" class="study-page-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
				default: "",
			},
			maxWidth: {
				type: String,
				required: true,
				default: "800px",
			}
		},
		data() {
			return {}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		},
		mounted() {}
	}
</script>

<style>
	.van-nav-bar {
		box-shadow: 0px 0px 5px 0px #ccc;
	}
	.study-page{
		height: 100%;
		width: auto;
		margin: auto;
	}
	.study-page .study-page-content{
		height: calc( 100% - 56px);
		overflow-y: auto;
	}
	.study-page-content::-webkit-scrollbar {
	    /*滚动条整体样式*/
	    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
	    height: 1px;
	}
	
	.study-page-content::-webkit-scrollbar-thumb {
	    /*滚动条里面小方块*/
	    border-radius: 10px;
	    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	    background: #535353;
	}
	
	.study-page-content::-webkit-scrollbar-track {
	    /*滚动条里面轨道*/
	    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	    border-radius: 10px;
	    background: #ededed;
	}
</style>
