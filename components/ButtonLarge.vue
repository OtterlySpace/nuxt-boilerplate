<template>
	<nuxt-link
		:to="to"
		class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
	>
		{{ content }}
	</nuxt-link>
</template>

<script>
export default {
	props: ["content", "to"]
}
</script>
