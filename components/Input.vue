<template>
	<input
		class="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
		:placeholder="placeholder"
		:type="type"
	/>
</template>

<script>
export default {
	props: ["placeholder", "type"]
}
</script>
