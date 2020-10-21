import { createSEOMeta } from "./utils/seo"

import fr from "./lang/fr.json"
import en from "./lang/en.json"

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: "static",

	env: {
		apiUrl:
			process.env.NUXT_ENV_API_URL || "https://api.localhost.otterly.eu",
		hostName:
			process.env.NUXT_ENV_HOST_NAME || "https://localhost.otterly.eu"
	},

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		htmlAttrs: {
			lang: "fr"
		},
		titleTemplate: "%s - nuxt-boilerplate",
		title: "Todo List",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ hid: "description", name: "description", content: "" },
			...createSEOMeta({
				title: "Todo List - nuxt-boilerplate",
				description: "Boilerplate is a Boilerplate",
				image: process.env.NUXT_ENV_HOST_NAME + "/card_img.png",
				url: process.env.NUXT_ENV_HOST_NAME
			})
		],
		link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ["~/assets/main.css"],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: "~/plugins/vue-tailwind" },
		{ src: "~/plugins/vue-apollo" }
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
		// https://github.com/nuxt-community/tailwindcss-module
		"@nuxtjs/tailwindcss",
		// https://github.com/nuxt-community/dotenv-module
		"@nuxtjs/dotenv"
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
		// https://go.nuxtjs.dev/content
		"@nuxt/content",
		// https://i18n.nuxtjs.org/
		"nuxt-i18n"
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// I18n module configuration https://i18n.nuxtjs.org/basic-usage
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
		vueI18n: {
			fallbackLocale: "fr",
			messages: {
				fr,
				en
			}
		}
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},

	purgeCSS: {
		mode: "postcss",
		extractors: [
			{
				extractor(content) {
					return content.match(/[\w-.:/]+(?<!:)/g)
				},
				extensions: ["html", "vue", "js", "ts"]
			},
			{
				extractor(content) {
					return content.match(/[A-Za-z0-9-_:/]+/g)
				},
				extensions: ["js", "ts"]
			}
		]
	}
}
