<template>
	<i class="triangle-icon" :class="{expanded:expanded}">
		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M384 192v640l384-320.064z"></path>
		</svg>
	</i>
</template>

<script>
	export default {
		props:{
			expanded:{
				type: Boolean,
				default:false,
			}
		}
	}
</script>

<style>
	.triangle-icon {
		color: inherit;
		height: 1em;
		width: 1em;
		line-height: 1em;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		position: relative;
		fill: currentColor;
	}
	.triangle-icon.expanded{
		transform: rotate(90deg);
	}
</style>
