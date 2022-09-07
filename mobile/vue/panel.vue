<template>
	<div>
		<van-nav-bar title="信息面板" left-text="返回" left-arrow @click-left="onClickLeft" class="van-nav-bar"/>
		<div style="padding-top: 10px;">
			<zc-panel title="个人信息" :showSkeleton="showSkeleton" :length="4" :list="list"></zc-panel>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showSkeleton:true,
				list:[],
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			}
		},
		mounted() {
			let that = this
			setTimeout(function(){
				that.showSkeleton = false
				that.list.push({title:"姓名",value:"王作宽"})
				that.list.push({title:"性别",value:"男"})
				that.list.push({title:"联系方式",value:"13899952346"})
				that.list.push({title:"通讯地址",value:"新疆维吾尔自治区乌鲁木齐市绿城广场2B座401号"})
			},1000);
		}
	}
</script>

<style>
	.van-nav-bar{
		box-shadow: 0px 0px 5px 0px #ccc;
	}
</style>
