<template>
	<div class="study_3">
		<study-page title="VUE属性">
			<text-panel :title="list[0].title" :content="list[0].content" :color="list[0].color">
				<div>
					在以上的六节中，我们简单的了解了vue的常用指令、属性、生命周期、组件等，
					VUE中仍然存在许多的其他特性我们后面再进行补充
				</div>
				<h5>待教程内容</h5>
				<question-panel><template #label>directives 自定义指令</template></question-panel>
				<question-panel><template #label>VUE内置组件</template></question-panel>
			</text-panel>
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
				}]
			}
		}
	}
</script>

<style>
	.study_3{
		
	}
</style>