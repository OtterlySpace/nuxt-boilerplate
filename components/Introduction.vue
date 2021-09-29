<template>
	<div class="font-medium">{{ content }}</div>
</template>

<script lang="ts">
export default {
	name: "Introduction",
	props: {
		content: {
			type: Number,
			default: 0
		}
	}
}
</script>
