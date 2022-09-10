<template>
	<div class="tree-node">
		<div class="tree-node-content">
			<span>新疆维吾尔自治区</span>
		</div>
		<div class="tree-node-children" >
			<span>乌鲁木齐市</span>
		</div>
	</div>
</template>

<script>
	export default {

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

	.tree-node .tree-node-content {
		padding: 5px 0;
	}

	.tree-node .tree-node-content:hover {
		background-color: #f5f5f5;
		padding: 5px 0;
	}
	.tree-node .tree-node-children {
		padding: 5px 0;
		padding-left: 30px;
	}
	
	.tree-node .tree-node-children:hover {
		background-color: #f5f5f5;
	}
</style>
