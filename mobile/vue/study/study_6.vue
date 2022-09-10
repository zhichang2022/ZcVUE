<template>
	<div class="study_3">
		<study-page title="VUE属性">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color"></text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color">
				<iframe-panel title="混入示例" url="page/study06/demo1.html" desc="以上是页面显示效果,以下是示例代码" height="200px">
					<code-reader :content="code10" title="混入示例">
						<question-panel>
							<template #label>阐述</template>
							<template #content>
								<div>
									1、混入的mounted加载在组件的mounted
								</div>
								<div>
									2、混入中定义的data会被组件中的相同定义覆盖，并且watch晚于data属性的定义
								</div>
								<div>
									3、我们可以向使用组件自身定义的方法和变量一样去使用他们
								</div>
							</template>
						</question-panel>
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
				list: [{
					color: "#c12c1f",
					title: "导读",
					content: ImportText("study06/c1")
				}, {
					color: "#b6a014",
					title: "示例",
					content: ImportText("study06/c2")
				}, ],
				code10: ImportCode("code10"),
			}
		}
	}
</script>

<style>
	.study_3 {}
</style>
