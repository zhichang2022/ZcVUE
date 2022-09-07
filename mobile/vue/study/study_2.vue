<template>
	<div class="study_2">
		<study-page title="VUE常用指令">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<question-panel><template #label>数据绑定</template></question-panel>
				<question-panel><template #label>事件绑定</template></question-panel>
				<question-panel><template #label>流程控制</template></question-panel>
				<question-panel><template #label>v-once</template></question-panel>
				<question-panel><template #label>过滤器</template></question-panel>
				<question-panel><template #label>ref</template></question-panel>
			</text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color">
				<iframe-panel title="数据绑定示例" url="page/study02/demo1.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="code2" title="VUE的基础模板">
						<question-panel>
							<template #label>如何理解数据绑定？</template>
							<template #content>
								数据绑定，指将页面需要渲染的数据，定义为动态数据，一旦数据变化，页面会实现动态渲染。
								<br>数据绑定对应的数据必须为对象(当然function也是一种对象，绑定的是function的返回值，比如说计算属性，这时需要保证必须存在返回值)
								<br>
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[2].title" :content="list[2].content" :color="list[2].color">
				<iframe-panel title="事件绑定示例" url="page/study02/demo2.html" desc="以上是页面显示效果,以下是示例代码" height="140px">
					<code-reader :content="code3" title="VUE的基础模板">
						<question-panel>
							<template #label>如何理解事件绑定？</template>
							<template #content>
								事件绑定绑定与原生的方法传参不同，获取当前事件，需要传参$event,如上述示例。
								<br>而被定义的动态数据可以直接使用。
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[3].title" :content="list[3].content" :color="list[3].color">
				<iframe-panel title="流程控制示例" url="page/study02/demo3.html" desc="以上是页面显示效果,以下是示例代码" height="180px">
					<code-reader :content="code4" title="流程控制示例">
						<question-panel>
							<template #label>对比v-if与v-show的不同？</template>
							<template #content>
								<div style="text-align: center;">
									<img src="page/study02/img/img1.png" class="img">
									<img src="page/study02/img/img2.png" class="img">
								</div>
								v-if是根据条件判断是否渲染，v-show完成渲染，根据条件判断是否显示。同jQuery中的show和hide方法
							</template>
						</question-panel>
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[4].title" :content="list[4].content" :color="list[4].color">
				<iframe-panel title="v-once" url="page/study02/demo4.html" desc="以上是页面显示效果,以下是示例代码" height="100px">
					<code-reader :content="code5" title="v-once示例"></code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[5].title" :content="list[5].content" :color="list[5].color">
				<iframe-panel title="过滤器" url="page/study02/demo5.html" desc="以上是页面显示效果,以下是示例代码" height="100px">
					<code-reader :content="code6" title="v-once示例"></code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[6].title" :content="list[6].content" :color="list[6].color">
			</text-panel>
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
					content: "本节主要讲解VUE的常用指令，内容比较繁琐，但是理解难度较低，建议耐心阅读。主要涉及以下方面："
				}, {
					id: "c1",
					color: "#b6a014",
					title: "一、数据绑定",
					content: ImportText("study02/c1")
				}, {
					id: "2",
					color: "#80a492",
					title: "二、事件绑定",
					content: ImportText("study02/c2")
				}, {
					id: "3",
					color: "#422517",
					title: "三、流程控制",
					content: ImportText("study02/c3")
				}, {
					id: "4",
					color: "#a76283",
					title: "四、v-once",
					content: ImportText("study02/c4")
				}, {
					id: "5",
					color: "#6b5458",
					title: "五、过滤器",
					content: ImportText("study02/c5")
				}, {
					id: "6",
					color: "#7c461e",
					title: "六、ref对象绑定",
					content: ImportText("study02/c6")
				}],
				code2: ImportCode("code2"),
				code3: ImportCode("code3"),
				code4: ImportCode("code4"),
				code5: ImportCode("code5"),
				code6: ImportCode("code6"),
			}
		}
	}
</script>

<style>
	.study_2 {}

	.study_2 .img {
		padding: 2px;
		border: 1px solid #999;
		max-width: 100%;
	}
</style>
