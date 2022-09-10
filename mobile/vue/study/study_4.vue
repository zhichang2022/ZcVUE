<template>
	<div class="study_4">
		<study-page title="VUE生命周期">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<question-panel><template #label>beforeCreate( 创建前 )</template></question-panel>
				<question-panel><template #label>created( 创建后 )</template></question-panel>
				<question-panel><template #label>beforeMount( 挂载前)</template></question-panel>
				<question-panel><template #label>Mounted( 挂载后)</template></question-panel>
				<question-panel><template #label>beforeUpdate</template></question-panel>
				<question-panel><template #label>updated</template></question-panel>
				<question-panel><template #label>beforeDestroy</template></question-panel>
				<question-panel><template #label>destroyed</template></question-panel>
				<img src="mobile/img/vue.png" style="width: 100%;">
			</text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color"></text-panel>
			<text-panel :title="list[2].title" :content="list[2].content" :color="list[2].color"></text-panel>
			<text-panel :title="list[3].title" :content="list[3].content" :color="list[3].color"></text-panel>
			<text-panel :title="list[4].title" :content="list[4].content" :color="list[4].color">
				<iframe-panel title="创建Vue实例的示例" url="page/study04/demo1.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="code7" title="创建Vue实例的示例">
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[5].title" :content="list[5].content" :color="list[5].color"></text-panel>
			<text-panel :title="list[6].title" :content="list[6].content" :color="list[6].color">
				<iframe-panel title="更新实例" url="page/study04/demo2.html" desc="以上是页面显示效果,以下是示例代码" height="400px">
					<code-reader :content="code8" title="更新实例">
					</code-reader>
				</iframe-panel>
			</text-panel>
			<text-panel :title="list[7].title" :content="list[7].content" :color="list[7].color"></text-panel>
			<text-panel :title="list[8].title" :content="list[8].content" :color="list[8].color"></text-panel>
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
					content: ImportText("study04/c0")
				}, {
					color: "#b6a014",
					title: "一、beforeCreate( 创建前 )",
					content: ImportText("study04/c1")
				}, {
					color: "#80a492",
					title: "二、created( 创建后 )",
					content: ImportText("study04/c2")
				}, {
					color: "#422517",
					title: "三、beforeMount( 挂载前)",
					content: ImportText("study04/c3")
				}, {
					color: "#a76283",
					title: "四、Mounted( 挂载后)",
					content: ImportText("study04/c4")
				}, {
					color: "#6b5458",
					title: "五、beforeUpdate",
					content: ImportText("study04/c5")
				}, {
					color: "#4f6f46",
					title: "六、updated",
					content: ImportText("study04/c6")
				}, {
					color: "#c35c5d",
					title: "七、beforeDestroy",
					content: ImportText("study04/c7")
				}, {
					color: "#2c2f3b",
					title: "八、destroyed",
					content: ImportText("study04/c8")
				}, ],
				code7: ImportCode("code7"),
				code8: ImportCode("code8"),
			}
		}
	}
</script>

<style>
	.study_4 {}
</style>
