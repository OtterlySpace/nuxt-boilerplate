<template>
	<input
		v-model="input"
		:class="inputClasses"
		:placeholder="placeholder"
		:type="type"
		:disabled="disabled"
	/>
</template>

<script>
export default {
	props: {
		placeholder: { type: String, default: "" },
		type: { type: String, default: "text" },
		disabled: { type: Boolean, default: false },
		defaultValue: { type: String, default: "" }
	},
	data() {
		return {
			classes: {
				default:
					"flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4",
				disabled:
					"flex-grow w-full bg-gray-300 rounded border border-gray-400 text-base px-4 py-2 mr-4 cursor-not-allowed"
			}
		}
	},
	computed: {
		input: {
			get() {
				// Set input to the default value
				return this.defaultValue
			},
			set(val) {
				// Return the edited value through the input event
				this.$emit("input", val)
			}
		},
		inputClasses() {
			const classes = this.disabled
				? this.classes.disabled
				: this.classes.default
			return classes
		}
	}
}
</script>
