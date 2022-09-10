<template>
	<div class="study_5">
		<study-page title="VUE组件">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<question-panel><template #label>了解什么是组件化</template></question-panel>
				<question-panel><template #label>methods</template></question-panel>
				<question-panel><template #label>template</template></question-panel>
				<question-panel><template #label>computed</template></question-panel>
				<question-panel><template #label>watch</template></question-panel>
				<question-panel><template #label>components</template></question-panel>
			</text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color">
				<iframe-panel title="组件化的复现" url="page/study05/demo1.html" desc="以上是页面显示效果,以下是示例代码" height="200px">
					<code-reader :content="code9" title="组件化代码">
						<question-panel>
							<template #label>阐述</template>
							<template #content>
								讲这段代码不意味着，其实现难度有多大，或者说作者去蹭VUE的热度，实际上对于开发工作而言，我们追求的就是不断创造的更优雅，更简约的实现。
								<br> 我们将原本的代码进行了渲染，在浏览器中呈现如下效果
								<img src="page/study05/img/1.jpg" style="width: 100%" />
								<br>在本项目的中的page\study05\demo1.html中有具体的实现，其原理非常简单。
								<br>通过学习我们可以简单的看到组件封装的魅力，下面我们正式学习VUE的组件
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[2].title" :content="list[2].content" :color="list[2].color">
				<div class="commponent">
					<button @click="treeListChange">变更数据</button>
					<zc-tree :list="treeList" @selected="selected" @filter="treeFilter">
						<template #default="{data}">
							{{data.desc}}
						</template>
					</zc-tree>
					<tree-selected-panel :selectedData="selectedData"></tree-selected-panel>
				</div>
			</text-panel>
			<text-panel :title="list[3].title" :content="list[3].content" :color="list[3].color">
				<iframe-panel title="构建树组件步骤01" url="page/study05/step01.html" desc="以上是页面显示效果,以下是示例代码" height="100px">
					<code-reader :content="step01" title="构建树组件步骤01">
						<question-panel>
							<template #label>组件引入</template>
							<template #content>
								前面我们将vue的组件实际上只是一个对象，子组件的注册不过是将子组件对象加入到父组件的components中。
								<br>其中出现的 ImportHtml("components/tree-node1")
								写法不过是作者为了更方便向读者理解。将组件代码构建成为.vue文件，然后js动态解析为js对象。如果读者希望了解详情，可以查看import.js文件。
								<br>components: {treeNode } ，你可以通过以下图片简单了解其用法，在此处不详细展开。
								<img src="page/study05/img/es6_01.png" style="width: 100%" />
							</template>
						</question-panel>
						<question-panel>
							<template #label>组件结构</template>
							<template #content>
								最简单的组件结构可以是一段html代码和样式内容
								<br>ps: 意味着我们可以将高度复用的代码进行组件化，简化代码结果
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								<div></div>
								本需求： 需求01 ：构建树组件节点
								<br>首先我们要规划树组件的整体结构（样式代码没有贴出来，你可以通过查看源码，获取详细样式）
								<br>完整的树组件由一个节点构成，每个节点又包含本身内容和子节点内容， 我们首先构建出整体的结构，然后一步步分析我们需要添加的后续内容.
								<br>下一个需求： 需求02 ：添加父节点点击展开子节点的效果。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤02" url="page/study05/step02.html" desc="以上是页面显示效果,以下是示例代码" height="150px">
					<code-reader :content="step02" title="构建树组件步骤02">
						<question-panel>
							<template #label>props</template>
							<template #content>
								对于triangle-icon三角形图标组件，我们需要在父组件通过一个标识控制三角形子组件的旋转。
								这时候我们可以通过props 定义一个expanded:{type:
								Boolean,require:true,default:false}属性，实现父组件和子组件之前的通讯，当我们需要修改三角形组件的旋转时，只需要控制父组件的属性发生变化，子组件相应发生重新渲染。
								<br>其中type属性实现expanded的类型校验，require确认属性是否必填，default赋予属性默认值
								<br>在父组件调用子组件时，我们可以像使用element 的ID和name属性一样去使用子组件中的prop属性
							</template>
						</question-panel>
						<question-panel>
							<template #label>全局组件引入</template>
							<template #content>
								前面步骤我们引入了tree-node
								节点，但是如果使用相同的方式引入我们新增的triangle-icon三角形图标组件，我们发现该组件竟然无法使用，这说明组件引入是具有作用域的只能在当前组件内使用。
								读者可能会想到在tree-node节点引入并注册triangle-icon组件就可以了，这不失为一种解决方式，但是对于这种复用性比较强的组件，我们通常使用全局注册的方式，避免每次调用都需要进行再次引入。
							</template>
						</question-panel>
						<question-panel>
							<template #label>tree-node组件的数据绑定</template>
							<template #content>
								步骤1中固定的节点名称自然不符合抽象组件的意义，我们将步骤1中的父节点和子节点的名称的改为动态绑定属性，同时赋予父节点click点击事件用以控制是否展开子节点。
								<br>留一个疑问：我们在tree-node和triangle-icon组件中一共使用了集中属性绑定方式。
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								<div></div>
								本需求： 需求02 ：添加父节点点击展开子节点的效果
								<br>我们在当前步骤中，在步骤01的基础上添加了子节点的可以展开和收起的效果，同样根据实际使用场景将原来固定的数据转换为动态绑定数据。
								<br>当前有读者会认为其动态数据应该放在父组件中，并且树的节点不应该只有两层。在步骤03中我们针对性解决这个问题。
								<br>下一个需求： 需求03 ：将单层树节点变成一个无限深度的树节点组件。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤03" url="page/study05/step03.html" desc="以上是页面显示效果,以下是示例代码" height="350px">
					<code-reader :content="step03" title="构建树组件步骤03">
						<question-panel>
							<template #label>组件递归调用</template>
							<template #content>
								为了解决复杂问题，设计理念通常将复杂问题拆解成为一个简单为题的递归调用（详细请查询斐波那契数列兔子实验），
								这种方式大大减少了我们处理问题的复杂度。
								<br>值得惊叹的是VUE同样支持组件的递归调用。
								<br>我们使用props的方式，将children的数据通过v-for方式注入到递归的子节点中，就可以实现无限深度的树形结构
								<br>使用 （item,index） in list 或 item in list遍历列表内容时，item的作用域仅在当前元素节点内。我们分两种方式进行讨论：
								<br>如果v-for存在嵌套，即v-for的内部存在新的v-for时，变量名（item）不可重复
								<br>如果v-for不存在嵌套，变量名（item）可以重复
							</template>
						</question-panel>
						<question-panel>
							<template #label>v-if-else</template>
							<template #content>
								<img src="page/study05/img/v_if_else_02.png" style="width: 100%" />
								如上图，我们需要根据子节点的是否为空，判断是否使用三角形组件
								<img src="page/study05/img/v_if_else.png" style="width: 100%" />
								如上图，为了解决子节点显示样式为空，我们需要在没有子节点的节点前添加一个占位样式，用以对其。
								<br>vue支持 v-if 、 v-else 、v-if-else 书写方式，和js中的条件语句非常相识，但是我们并不推荐使用多层复杂的嵌套。
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								本需求： 需求03 ：将单层树节点变成一个无限深度的树节点组件
								<br>在当前步骤中，为了构造多层级树结构，我们使用了组件的递归调用，同时为了使我们的数结构保持不错的展示效果，我们使用v-if、:style和计算属性。
								<br>由于我们的点击事件属于其子组件本身，让我们父组件需要获取点击节点的内容时，确仍然是一个问题。
								<br>下一个需求： 需求04 ：父子组件交互。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤04" url="page/study05/step04.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="step04" title="构建树组件步骤04">
						<question-panel>
							<template #label>$emit</template>
							<template #content>
								组件的事件归属与其组件本身，如果需要完成父子组件之间的通讯，VUE提供了$emit解决方案。
								<br>其本质是一个钩子函数，或者可以理解为，父组件通过v-on(同@)事件绑定将函数传递给子组件，子组件在指定条件下通过$emit调用该函数，并将参数传递给父组件。其用法我们记住即可。
								<br>而对于递归组件，需要通过事件绑定的不断传递给上层.PP父组件通过拿到树节点的值,动态显示选中节点.
								<br>其本质是封装了组件内部信息,并提供了可调用的API.
								<img src="page/study05/img/emit.png" style="width: 100%" />
								<br>例如VantUI框架Switch开关框架中,详细注明了提供的绑定事件详细内容, 包含绑定的事件名称和接收的回调函数.
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								本需求： 需求04 ：父子组件交互
								<br>在当前步骤中，我们完成了父子组件的交互,可以满足当选择树节点时,调用tree-node组件的页面可以获取选中节点的信息,我们可以根据实际业务需求,进行功能展开,譬如我们可以选中某节点后,显示对应节点下的景点信息或组织机构信息.
								<br> 同时,为了呈现更佳的显示效果,当选中某节点后,通过不同的背景颜色进行标记,并将父级节点高亮显示.
								<br> 虽然现在看我们树形结构组件已经具备应该有的功能,可是总归显得略微生硬一些,下面我们通过VUE插槽将组件具有一些自定义的特性.
								<br>下一个需求： 需求05 ：VUE插槽(一)。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤05_01" url="page/study05/step05_01.html" desc="以上是页面显示效果,以下是示例代码"
					height="400px">
					<code-reader :content="step05_01" title="构建树组件步骤05_01">
						<question-panel>
							<template #label>slot</template>
							<template #content>
								插槽的使用方式非常简单,只需要在子组件需要的位置加入slot标签,然后定义在组件内部的子元素,将绑定到组件的插槽中.
								<img src="page/study05/img/slot_01.png" style="width: 100%" />
								<br>通过F12查看页面解析,发现组件内部的子元素,已绑定到对应位置
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								虽然我们完成了组件设置,但是通过示例,我们发现递归的内部组件并没有对应的显示
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤05_02" url="page/study05/step05_02.html" desc="以上是页面显示效果,以下是示例代码"
					height="400px">
					<code-reader :content="step05_02" title="构建树组件步骤05_02">
						<question-panel>
							<template #label>递归组件的子节点传递</template>
							<template #content>
								为了解决递归组件的内部插槽没有显示,我们可以将 slot 复制到递归组件中
								<span
									style="color: red;">这里需要特殊说明的是,递归组件中的slot使用并不是重新定义了slot,而是相当于复制了组件slot的内容到递归组件中</span>
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								虽然我们定义了插槽,但是因为无法获取子组件的信息.
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤05_03" url="page/study05/step05_03.html" desc="以上是页面显示效果,以下是示例代码"
					height="400px">
					<code-reader :content="step05_03" title="构建树组件步骤05_03">
						<question-panel>
							<template #label>通过插槽实现数据传递</template>
							<template #content>
								1.通过上面的代码,我们可以发现递归组件内部的slot实际上是组件插槽的复制,需要写道template 模板中,
								<br>2. 插槽的属性可以定义多个,使用{data,label}可以接收对应的属性,使用slotData可以接收一个对象,通过.属性获取插槽定义的属性.
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								以上的示例均是一个插槽,如果需要定义多个插槽应该怎么办
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤05_04" url="page/study05/step05_04.html" desc="以上是页面显示效果,以下是示例代码"
					height="400px">
					<code-reader :content="step05_04" title="构建树组件步骤05_04">
						<question-panel>
							<template #label>通过插槽实现数据传递</template>
							<template #content>
								通过定义多个插槽,其中content插槽用以展示tree节点的描述
								<br>我们称具有name属性的插槽为具名插槽,对于定义name的插槽成为默认插槽或非具名插槽
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								插槽讲到这里常用内容已经讲完.
								<br>但是这个树形结构必须通过一个父级节点开始,但是如果在一级节点时存在多个节点,则无法满足需求,同时我们需要手动声明每个节点的level也不是我们想要的效果。
								<br> 下一个需求： 需求06 ：使用功能封装。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤06" url="page/study05/step06.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="step06" title="zc-tree.vue">
						<question-panel>
							<template #label>计算属性computed</template>
							<template #content>
								我们使用计算属性实现了树的子节点查询。实现原理，当输入框内的数据不为空时，将递归过滤tree列表中所有节点，
								如果子节点中包含查询的内容时，保持其树形结构不变，仅仅过滤其他节点。
								<br>计算属性：可以看作一个动态变化的数据（必须使用return 返回数据），当其中依赖的属性发生变化时，计算属性响应发生变化；
							</template>
						</question-panel>
						<question-panel>
							<template #label>需求解析</template>
							<template #content>
								在本步骤中，我们通过zc-tree封装了tree-node ,实现了tree name和level级别的自动生成
								<br>同时，本步骤使用计算属性完成了树节点的过滤，但如果我需要将过滤的方法通过事件绑定的方式暴露给父组件时，使用计算属性的方式将会捉襟见肘
								<br>因为动态过滤树的过程我们无法保证一定是一个同步执行的过程，下面我们通过一个例子去看一下。
								<br> 下一个需求： 需求07 ：watch属性监听。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
				<iframe-panel title="构建树组件步骤07" url="page/study05/step07.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="step07" title="构建树组件步骤07">
						<question-panel>
							<template #label>需求分析</template>
							<template #content>
								到这一步，我们已经基本完成了树组件的设计。
								<br>在最后一步，我们特别强调了俩个注意点。
							</template>
						</question-panel>
						<question-panel>
							<template #label>watch方法</template>
							<template #content>
								如果我们遇到watch首次赋值没有触发,可能是没有定义immediate属性或属性值为false
							</template>
						</question-panel>
						<question-panel>
							<template #label>$emit方法</template>
							<template #content>
								$emit方法是没有返回值的，如果想和父组件交互并获取返回值，最佳手段就是利用钩子函数，即调用$emit方法时候，
								传递一个函数作为参数，利用函数获取父组件的数据。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[4].title" :content="list[4].content" :color="list[4].color">
				<iframe-panel title="ref" url="page/study05/step08.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="step08" title="ref">
						
					</code-reader>
				</iframe-panel>
			</text-panel>
		</study-page>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectedData: "",
				treeDataType: "",
				treeList: [],
				treeList1: [{
					label: '新疆维吾尔自治区',
					children: [{
						label: '乌鲁木齐市',
						children: [{
								label: '天山区',
								children: []
							},
							{
								label: '沙依巴克区',
								children: []
							},
							{
								label: '水磨沟区',
								children: []
							},
							{
								label: '经开区',
								children: []
							},
							{
								label: '新市区',
								children: []
							},
							{
								label: '米东区',
								desc: "作者所居住的地区",
								children: []
							},
							{
								label: '达坂城区',
								children: []
							},
							{
								label: '乌鲁木齐县',
								children: []
							}
						]
					}]
				}],
				treeList2: [{
					label: '新疆维吾尔自治区_new',
					children: [{
						label: '乌鲁木齐市_new',
						children: [{
								label: '天山区_new',
								children: []
							},
							{
								label: '沙依巴克区_new',
								children: []
							},
							{
								label: '水磨沟区_new',
								children: []
							},
							{
								label: '经开区_new',
								children: []
							},
							{
								label: '新市区_new',
								children: []
							},
							{
								label: '米东区_new',
								desc: "作者所居住的地区",
								children: []
							},
							{
								label: '达坂城区_new',
								children: []
							},
							{
								label: '乌鲁木齐县_new',
								children: []
							}
						]
					}]
				}],
				list: [{
					color: "#c12c1f",
					title: "导读",
					content: "本节主要涉及以下内容："
				}, {
					color: "#b6a014",
					title: "一、组件化的前世今生",
					content: ImportText("study05/c1")
				}, {
					color: "#80a492",
					title: "二、VUE的组件",
					content: ImportText("study05/c2")
				}, {
					color: "#422517",
					title: "三、创建一个基础组件",
					content: ImportText("study05/c3")
				}, {
					color: "#a76283",
					title: "四、ref",
					content: ImportText("study05/c4")
				},  ],
				code9: ImportCode("code9"),
				step01: ImportCode("step01"),
				step02: ImportCode("step02"),
				step03: ImportCode("step03"),
				step04: ImportCode("step04"),
				step05_01: ImportCode("step05_01"),
				step05_02: ImportCode("step05_02"),
				step05_03: ImportCode("step05_03"),
				step05_04: ImportCode("step05_04"),
				step06: ImportCode("step06"),
				step07: ImportCode("step07"),
				step08: ImportCode("step08"),
			}
		},
		methods: {
			treeFilter(list, content, back) {
				let l = []
				let result = searchList(list, content, l)
				back(result)
			},
			selected(v) {
				this.selectedData = v.label
			},
			treeListChange() {
				if (this.treeDataType == "treeList1") {
					this.treeList = this.treeList2
					this.treeDataType = "treeList2"
				} else {
					this.treeList = this.treeList1
					this.treeDataType = "treeList1"
				}
			}
		},
		mounted() {
			this.treeDataType = "treeList1"
			this.treeList = this.treeList1
		}
	}

	function searchList(list, content, l) {
		if (!list || list.length == 0) {
			return l
		} else {
			for (var i = 0; i < list.length; i++) {
				search(list[i], content, l)
			}
			return l;
		}
	}

	function search(node, content, l) {
		if (node.label.indexOf(content) >= 0) {
			let str = JSON.stringify(node)
			let copy = JSON.parse(str);
			copy.children = []
			l.push(copy)
		}
		let children = searchList(node.children, content, l)
	}
</script>

<style>
	.study_5 {}

	.study_5 .commponent {
		box-shadow: 1px 1px 5px 0 #999;
		padding: 10px;
		border-radius: 5px;
	}
</style>
