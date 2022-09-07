<template>
	<div class="study_1">
		<study-page title="初识VUE">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<question-panel><template #label>认识VUE</template></question-panel>
				<question-panel><template #label>手动实现双向绑定</template></question-panel>
				<question-panel><template #label>了解VUE的基础模板</template></question-panel>
			</text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color">
				<question-panel>
					<template #label>如何理解渐进式框架？</template>
					<template #content>
						渐进式框架，意味着我们无需绑定式使用VUE，你可以在web开发的任意阶段去使用它。
						对于传统jquery项目你可以使用引入VUE.js的方式改造你的项目，在其中像使用template.js一样使用Vue（本教程使用的方式）。
						对于新的项目，你可以使用node的方式快速构建一个新的VUE项目。
					</template>
				</question-panel>
				<question-panel>
					<template #label>如何理解增量开发？</template>
					<template #content>
						增量开发是一种常用的软件开发模型，简单可以理解为迭代方式。意味着VUE开发团队在开发初期已经构建好系统的核心要素，并明确特定目标，小版本的迭代不会引起颠覆性学习，用户可以放心使用更新的版本，大版本除外，如VUE2和VUE3。
						<br>它既说明vue开发团队使用这种方式开发，也告诉我们可以放心使用vue并且推荐我们使用这种方式。
					</template>
				</question-panel>
				<question-panel>
					<template #label>设计模型MVVM？</template>
					<template #content>
						MVVM是 Model-View-ViewModel 的缩写，也就是把MVC中Controller演变成ViewModel，使用过JSP的会更清楚一下。
						Model层代表数据模型，View 代表 UI 组件， ViewModel是View 和 Model
						层的桥梁（即双向绑定），数据会绑定到ViewModel层并自动将数据渲染到页面中，视图变化是时候会通知ViewModel 层更新数据。
					</template>
				</question-panel>
			</text-panel>
			<text-panel :title="list[2].title" :content="list[2].content" :color="list[2].color">
				<question-panel>
					<template #label>VUE有什么优点？</template>
					<template #content>
						双向绑定、条件渲染、组件、生命周期管理、轻量（本教程的vue使用的vue.global.prod.js，一共123K）
					</template>
				</question-panel>
			</text-panel>
			<text-panel :title="list[3].title" :content="list[3].content" :color="list[3].color">
			</text-panel>
			<iframe-panel title="简单实现双向绑定" url="page/study01/demo1.html" desc="输入<span>1</span>试一试" height="120px">
				<code-reader :content="code0" title="手动实现和VUE一样的双向绑定"></code-reader>
			</iframe-panel>
			<iframe-panel title="认识vue模板" url="page/study01/demo2.html" desc="以上是页面显示效果,以下是示例代码" height="60px">
				<code-reader :content="code1" title="VUE的基础模板">
					<question-panel>
						<template #label>VUE的基础模板给我们什么启示？</template>
						<template #content>
							上面的模板内容非常简单，但是却涵盖了我们对VUE框架基础理念的理解
							<br>首先，我们使用过的VUE场景，大多数是单页面的场景。
							<br>其次，绑定elementDOM 对象后，指定元素的内容是否被覆盖，取决于是否使用template子属性
							<br>最后，VUE实际的操作，其实是通过对象属性来实现的。
						</template>
					</question-panel>
				</code-reader>
			</iframe-panel>
		</study-page>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: "c0",
					color: "#c12c1f",
					title: "导读",
					content: "本节主要涉及以下内容："
				},{
					id: "c1",
					color: "#b6a014",
					title: "一、什么是VUE？",
					content: ImportText("study01/c1")
				}, {
					id: "2",
					color: "#80a492",
					title: "二、为什么使用VUE？",
					content: ImportText("study01/c2")
				}, {
					id: "3",
					color: "#422517",
					title: "三、VUE可以干什么？",
					content: ImportText("study01/c3")
				}],
				code0: ImportCode("code0"),
				code1: ImportCode("code1")
			}
		}
	}
</script>

<style>
	.study_1 {}
</style>
