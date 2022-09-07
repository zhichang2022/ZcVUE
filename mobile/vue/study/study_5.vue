<template>
	<div class="study_3">
		<study-page title="VUE属性">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<question-panel><template #label>data</template></question-panel>
				<question-panel><template #label>methods</template></question-panel>
				<question-panel><template #label>template</template></question-panel>
				<question-panel><template #label>computed</template></question-panel>
				<question-panel><template #label>watch</template></question-panel>
				<question-panel><template #label>components</template></question-panel>
			</text-panel>
			<text-panel :title="list[1].title" :content="list[1].content" :color="list[1].color"></text-panel>
			<text-panel :title="list[2].title" :content="list[2].content" :color="list[2].color"></text-panel>
			<text-panel :title="list[3].title" :content="list[3].content" :color="list[3].color"></text-panel>
			<text-panel :title="list[4].title" :content="list[4].content" :color="list[4].color"></text-panel>
			<text-panel :title="list[5].title" :content="list[5].content" :color="list[5].color"></text-panel>
			<text-panel :title="list[6].title" :content="list[6].content" :color="list[6].color"></text-panel>
		</study-page>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				list: [{
					color: "#c12c1f",
					title: "导读",
					content: "本节主要涉及以下内容："
				},{
					color: "#b6a014",
					title: "一、data",
					content: ImportText("study03/c1")
				}, {
					color: "#80a492",
					title: "二、methods",
					content: ImportText("study03/c2")
				}, {
					color: "#422517",
					title: "三、template",
					content: ImportText("study03/c3")
				}, {
					color: "#a76283",
					title: "四、computed",
					content: ImportText("study03/c4")
				}, {
					color: "#6b5458",
					title: "五、watch",
					content: ImportText("study03/c5")
				}, {
					color: "#4f6f46",
					title: "六、components",
					content: ImportText("study03/c6")
				},]
			}
		}
	}
</script>

<style>
	.study_3{
		
	}
</style>