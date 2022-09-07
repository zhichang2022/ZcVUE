<template>
	<div class="code-reader htmledit_views">
		<div class="code-reader-title">{{title}}</div>
		<pre><code :class="type">{{content}}</code></pre>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
				default: ""
			},
			content: {
				type: String,
				required: true,
				default: ""
			},type: {
				type: String,
				required: true,
				default: "html"
			},
		},
		data() {
			return {}
		},
		mounted() {
			hljs.initHighlightingOnLoad();
			hljs.highlightAll();
			hljs.initLineNumbersOnLoad();
		}
	}
</script>

<style>
	.code-reader {
		background-color: #fff;
		padding: 5px 10px;
		margin: 10px 0;
		box-shadow: 0 0 5px 0 #999;
	}

	.code-reader .code-reader-title {
		margin: 5px 0;
		text-align: left;
		font-weight: 600;
		font-size: 14px;
		color: #555;
	}

	.code-reader pre {
		margin: 0;
	}

	.hljs-ln-numbers .hljs-ln-n {
		padding-right: 3px;
		border-right: 1px solid #999;
		text-align: right;
		color: #ecd452;
	}
</style>
