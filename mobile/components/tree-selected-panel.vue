<template>
	<div>
		{{content}}
		<!-- {{getContent}} -->
	</div>
</template>

<script>
	export default {
		props: {
			selectedData: {
				type: String,
				default: ""
			}
		},
		watch:{
			selectedData(n,o){
				console.log(n,o)
				this.content = "您选择的数据为："+ n
			}
		},
		computed:{
			getContent(){
				return "您选择的数据为："+this.selectedData
			}
		},
		data() {
			return {
				content:""
			}
		},
		mounted() {
			// this.content = "您选择的数据为："+this.selectedData
		}
	}
</script>

<style>
</style>
