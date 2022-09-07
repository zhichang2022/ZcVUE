<template>
	<div class="text-panel" :style="{'border-left-color':color}">
		<div class="text-panel-title">
			{{title}}
		</div>
		<div class="text-panel-content" v-html="content">
		</div>
		<slot></slot>
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
			content: {
				type: String,
				required: true,
				default: "",
			},
			color: {
				type: String,
				required: true,
				default: "red",
			},
		},
		data() {
			return {}
		},
		methods: {},
		mounted() {}
	}
</script>

<style>
	.text-panel {
		background: #ffffff;
		margin-bottom: 10px;
		padding: 20px;
		box-shadow: 0px 2px 4px 0px #999999;
		border-left: 4px solid;
		border-left-color: red;
	}

	.text-panel .text-panel-title {
		font-weight: 600;
		margin-bottom: 10px;
	}

	.text-panel .text-panel-content {
		color: #666666;
		padding: 5px;
		letter-spacing: 1px;
		font-size: 14px;
		line-height: 20px;
	}
	.text-panel .img {
		padding: 2px;
		border: 1px solid #999;
		max-width: 100%;
	}
</style>
