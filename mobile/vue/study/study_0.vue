<template>
	<div class="study_0">
		<study-page title="说明">
			<text-panel :title="item.title" :content="item.content" :color="item.color" v-for="item in list">
			</text-panel>
			<img src="mobile/img/攀登2.png" class="bg—img">
		</study-page>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					color: "#c12c1f",
					title: "一、这个教程讲了什么？",
					content: "教程主要讲解VUE的基础知识，其中涉及到我个人对前端知识的一些串联理解和引申。"
				}, {
					color: "#c67915",
					title: "二、怎么用这个教程？",
					content: "我将开源这个教程的前端代码部分，同学可以下载源码本地使用该内容，同时可以进行修改补充，以便形成自己的知识体现。"
				}, {
					color: "#80a492",
					title: "三、为什么要写这个教程？",
					content: "熔炼过去学习的内容，将学习的前端知识进行系统的串联。"+
					"<br>通过不断的回顾自身的学习和知识的储备，可以清晰的了解自身学习的成长路线，为新知识的学习提供指导意义。同时希望与其他读者互换有无，共勉。"+
					"<br>该教程使用主要使用VUE和Vant-ui，其中涉及到作者个人对教程内容的理解，如有不当之处，敬请指出。"+
					"<br>同时默认其他读者具备一定的前端知识基础，涉及到部分基础内容，可能会略过。"+
					"<br>作者从事软件开发6年，所以非科班出身，前端学习内容相对较杂乱，如有错误，希望能够读者能够指出。" +
					"<br>联系方式：1058839666@qq.com"+
					"<div style ='text-align: right;'>2022年9月3日</div>"+
					"<div style ='text-align: right;'>-- 知常</div>"
				}]
			}
		}
	}
</script>

<style>
	.study_0 .bg—img {
		width: 100%;
	}
</style>
