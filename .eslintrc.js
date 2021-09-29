module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"prettier",
		"plugin:prettier/recommended",
		"plugin:nuxt/recommended"
	],
	plugins: ["prettier"],
	// add your custom rules here
	rules: {
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": "off",
		indent: ["error", "tab"],
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: true,
				avoidEscape: true
			}
		],
		semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
		"no-multi-spaces": "error",
		"no-trailing-spaces": "error",
		"arrow-spacing": "error"
	}
}
