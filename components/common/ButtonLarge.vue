<template>
	<div :class="buttonClasses" @click="() => this.$emit('click')">
		{{ content }}
	</div>
</template>

<script>
export default {
	props: {
		content: { type: String, default: "Click me!" },
		alt: { type: Boolean, default: false }
	},
	data() {
		return {
			classes: {
				large:
					"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center cursor-pointer select-none",
				largeAlt:
					"text-sm text-gray-600 hover:text-gray-700 text-center cursor-pointer select-none"
			}
		}
	},
	computed: {
		buttonClasses() {
			let classes = this.classes.large
			if (this.alt) {
				classes = this.classes.largeAlt
			}
			return classes
		}
	}
}
</script>
