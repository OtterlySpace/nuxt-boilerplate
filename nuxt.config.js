import colors from "vuetify/es5/util/colors"
import { createSEOMeta } from "./utils/seo"

import fr from "./lang/fr-FR.js"

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: "static",

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
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
				title: "Boilerplate",
				description: "Boilerplate is a Boilerplate",
				image: "share.png",
				url: process.env.HOST_NAME
			})
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
		// https://go.nuxtjs.dev/vuetify
		"@nuxtjs/vuetify",
		// https://github.com/nuxt-community/tailwindcss-module
		"@nuxtjs/tailwindcss"
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
				fr
			}
		}
	},

	// Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
	vuetify: {
		customVariables: ["~/assets/variables.scss"],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {}
}
