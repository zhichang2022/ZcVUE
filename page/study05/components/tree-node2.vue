<template>
	<div class="tree-node">
		<div class="tree-node-content" @click="selected">
			<triangle-icon class="tree-icon" :expanded="show">
			</triangle-icon>
			<span>{{label}}</span>
		</div>
		<div class="tree-node-children" v-show="show">
			<div v-for="item in children">{{item.label}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				label: "新疆维吾尔自治区",
				children:[
					{label:"乌鲁木齐市"},
					{label:"克拉玛依市"}
				]
			}
		},
		methods: {
			selected() {
				this.show = !this.show
			}
		}
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

	.tree-node .tree-node-children div{
		padding: 5px 0;
		padding-left: 30px;
	}

	.tree-node .tree-node-children div:hover {
		background-color: #f5f5f5;
	}
</style>
