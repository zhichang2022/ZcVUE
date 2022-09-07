<template>
	<div class="asia-panel">
		<div class="asia-panel-label">{{title}}</div>
		<div class="asia-panel-content">
			<van-skeleton title :row="length" v-if="showSkeleton" />
			<van-cell-group v-if="!showSkeleton">
				<van-cell :title="item.title" :value="item.value" v-for=" item in list"/>
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
				default: "信息面板",
			},
			length: {
				type: Number,
				required: true,
				default: 3,
			},
			showSkeleton: {
				type: Boolean,
				required: true,
				default: true,
			},
			list: {
				type: Object,
				required: true,
				default: {},
			}
		},
		data() {
			return {}
		}
	}
</script>

<style>
	.asia-panel {
		background: #fff;
	}

	.asia-panel .asia-panel-label {
		line-height: 40px;
		text-align: left;
		padding-left: 20px;
		background: #003a8c;
		color: #fff;
	}

	.asia-panel .asia-panel-content {
		padding: 10px 0;
	}
</style>
