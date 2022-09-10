<template>
	<div class="zc-tree" :id="name">
		<input v-model="searchContent" placeholder="输入要查询的内容" @input="treeFilter" />
		<tree-node :name="name + '_' + index" v-for="(item,index) in dataList  " :label="item.label"
			:level="item.level" :children="item.children" @selected="selected" :self="item">
			<template #content="{data}">
				<slot :data="data"></slot>
			</template>
			<template #default="data">
				<button @click="alert(data)">点击</button>
			</template>
		</tree-node>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				searchContent: "",
				dataList: [],
				dataListfilter: [],
			}
		},
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		watch: {
			list(n, o) {
				this.treeFilter()
			}
		},
		computed: {
			listProcess() {
				let list = setLevel(this.list, 0)
				if (this.searchContent && this.searchContent.length > 0) {
					list = searchList(list, this.searchContent)
				}
				return list
			}
		},
		mounted() {
			this.name = this.randomCoding()
		},
		methods: {
			alert(v) {
				alert(JSON.stringify(v))
			},
			randomCoding() {
				//创建26个字母数组
				var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
					'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				];
				var idvalue = '';
				let n = 4; //这个值可以改变的，对应的生成多少个字母，根据自己需求所改
				for (var i = 0; i < n; i++) {
					idvalue += arr[Math.floor(Math.random() * 26)];
				}
				return idvalue
			},
			selected(v) {
				this.$emit("selected", v)
			},
			treeFilter() {
				let that = this
				let temp = setLevel(this.list, 0)
				if (this.searchContent && this.searchContent.length > 0) {
					this.$emit("filter", temp, this.searchContent, (result) => {
						if(result){
							for (var i = 0; i < result.length; i++) {
								result[i].level = 0
							}
							that.dataList = result
						}else{
							that.dataList  = searchList(list, this.searchContent)
						}
					})
				}else{
					 that.dataList = setLevel(temp, 0)
				}
			}
		}
	}

	function setLevel(list, level) {
		for (var i = 0; i < list.length; i++) {
			list[i].level = level
			if (list[i].children) {
				setLevel(list[i].children, level + 1)
			}
		}
		return list;
	}

	function searchList(list, content) {
		let l = []
		if (!list || list.length == 0) {
			return l
		} else {
			for (var i = 0; i < list.length; i++) {
				let n = search(list[i], content)
				if (n) {
					l.push(n)
				}
			}
			return l;
		}
	}

	function search(node, content) {
		let children = searchList(node.children, content)
		if (children && children.length > 0) {
			let str = JSON.stringify(node)
			let copy = JSON.parse(str);
			copy.children = children
			return copy
			// 有效
		}
		if (node.label.indexOf(content) >= 0) {
			let str = JSON.stringify(node)
			let copy = JSON.parse(str);
			copy.children = []
			return copy;
		} else {
			return null;
		}
	}
</script>

<style>
	.zc-tree {}

	.zc-tree .search {
		background: #c12c1f;
	}

	.zc-tree .search:hover {
		background: #c1564d;
	}

	.zc-tree button {
		background: #c8cf3c;
		color: #fff;
		border: none;
		line-height: 20px;
		border-radius: 5px;
		box-shadow: 1px 1px 3px 0 #999;
		margin-right: 10px;
		font-size: 13px;
		cursor: pointer;
	}

	.zc-tree input {
		height: 25px;
		padding-left: 8px;
		border: none;
		border-bottom: 1px solid #aaa;
	}

	.zc-tree input:focus-visible {
		outline: none;
		border: none;
		border-bottom: 2px solid #479bee;
	}
</style>
