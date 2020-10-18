import Vue from "vue"
import VueTailwind from "vue-tailwind"

const settings = {
	TInput: {
		classes: "border-2 block w-full rounded text-gray-800"
	}
}

Vue.use(VueTailwind, settings)
