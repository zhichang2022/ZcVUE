<template>
	<div class="iframe-panel">
		<div class="iframe-panel-tag">示例</div>
		<div class="iframe-panel-title">
			{{title}}
		</div>
		<iframe :src="url" :style="{'height':height}"></iframe>
		<div v-text="desc" class="iframe-panel-desc">
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
			url: {
				type: String,
				required: true,
				default: "",
			},
			desc: {
				type: String,
				required: true,
				default: "",
			},
			height: {
				type: String,
				required: true,
				default: "300px",
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
	.iframe-panel {
		position: sticky;
		width: calc(100% -20px);
		background: #fff;
		padding: 5px 10px;
		box-shadow: 0 0 5px 0 #999;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.iframe-panel .iframe-panel-desc{
		color: #999;
		font-size: 13ppx;
	}
	.iframe-panel .iframe-panel-tag {
		background-color: #45465e;
		display: inline-block;
		width: auto;
		padding: 3px 8px;
		position: absolute;
		right: 0px;
		top: 0px;
		color: #fff;
		font-size: 12px;
	}

	.iframe-panel .iframe-panel-title {
		font-size: 16px;
		font-weight: 600;
		padding-left: 10px;
		text-align: center;
	}

	.iframe-panel iframe {
		background: #fff;
		width: 99%;
		border: none;
		box-shadow: 0 0 5px 0 #ccc;
		margin: 0.5%;
		border-radius: 5px;
	}
</style>
