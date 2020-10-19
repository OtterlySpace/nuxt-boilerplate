const TAlert = {
	fixedClasses: {
		wrapper: "rounded p-4 flex text-sm border-l-4",
		body: "flex-grow",
		close: "ml-4 rounded",
		closeIcon: "h-5 w-5 fill-current"
	},
	classes: {
		wrapper: "bg-blue-100 border-blue-500",
		body: "text-blue-700",
		close: "text-blue-700 hover:text-blue-500 hover:bg-blue-200",
		closeIcon: "h-5 w-5 fill-current"
	},
	variants: {
		danger: {
			wrapper: "bg-red-100 border-red-500",
			body: "text-red-700",
			close: "text-red-700 hover:text-red-500 hover:bg-red-200"
		},
		success: {
			wrapper: "bg-green-100 border-green-500",
			body: "text-green-700",
			close: "text-green-700  hover:text-green-500 hover:bg-green-200"
		}
	}
}

const TButton = {
	classes:
		"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center cursor-pointer select-none"
}

const settings = {
	TAlert,
	TButton
}

export default settings
