<template>
	<nuxt-link
		:to="to"
		class="text-sm text-gray-600 hover:text-gray-700 text-center"
	>
		{{ content }}
	</nuxt-link>
</template>

<script>
export default {
	props: ["content", "to"]
}
</script>
