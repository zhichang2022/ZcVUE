<template>
	<div class="question-panel">
		<div class="question-panel-label">
			<slot name="label"></slot>
		</div>
		<div class="question-panel-content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {},
		mounted() {}
	}
</script>

<style>
	.question-panel {
		font-size: 14px;
		padding-left: 10px;
		margin: 5px 0;
	}

	.question-panel .question-panel-label {
		font-weight: 600;
		line-height: 20px;
	}

	.question-panel .question-panel-label:before {
		content: "";
		color: red;
		background: red;
		width: 9px;
		height: 9px;
		margin: 1px 10px 1px -10px;
		display: inline-block;
	}

	.question-panel .question-panel-content {
		color: #666;
		line-height: 20px;
		padding: 5px 0 5px 10px;
	}
</style>
