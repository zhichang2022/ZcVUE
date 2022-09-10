<template>
	<div class="tree-node">
		<div class="tree-node-content" :style="{'padding-left': paddingLeft}" @click="selected">
			<triangle-icon class="tree-icon" :expanded="show" v-if="children && children.length > 0">
			</triangle-icon>
			<div v-else class="tree-icon-blank"></div>
			<span>{{label}}</span>
		</div>
		<div class="tree-node-children" v-show="show">
			<tree-node v-for="(item,index) in children" :label="item.label" :children="item.children"
				:level="item.level" :self="item">
			</tree-node>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				require: true
			},
			self: {
				type: self,
				default: {},
			},
			label: {
				type: String,
				require: true
			},
			level: {
				type: Number,
				require: true
			},
			children: {
				type: Array,
				default: [],
			},
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
			selected() {
				alert(this.label)
				this.show = !this.show
			}
		},
		computed: {
			paddingLeft() {
				let level = this.level
				let a = 14;
				if (level) {
					return '' + (a * level) + "px";
				} else {
					return '0px';
				}
			}
		},
		mounted() {}
	}
</script>

<style>
	.tree-node {
		color: #666;
		cursor: pointer;
		line-height: 20px;
		-webkit-user-select: none;
		font-size: 14px;
	}

	.tree-node .tree-icon-blank {
		display: inline-block;
		width: 24px;
	}

	.tree-node .tree-icon {
		padding: 0 5px;
	}

	.tree-node .tree-node-content {
		padding: 5px 0;
	}

	.tree-node .tree-node-content:hover {
		background-color: #f5f5f5;
		padding: 5px 0;
	}

	.tree-node-content.selected {
		background: #e4e9ee !important;
	}

	.fontWeight {
		font-weight: 600;
		color: #333;
	}

	.tree-node .tree-right {
		display: inline-block;
		float: right;
		color: #ccc;
		font-weight: 500;
	}

	.tree-node-right-content {
		display: inline-block;
		padding-right: 10px;
	}
</style>
