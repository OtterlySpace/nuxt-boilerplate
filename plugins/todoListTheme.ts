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
	fixedClasses:
		"focus:outline-none focus:shadow-outline transition ease-in-out duration-150",
	classes:
		"text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center",
	variants: {
		error: "text-white bg-red-600 hover:bg-red-500 focus:border-red-700  active:bg-red-700 text-lg border border-transparent px-8 py-2 rounded",
		success:
			"text-white bg-green-600 hover:bg-green-500 focus:border-green-700 active:bg-green-700 text-lg border border-transparent px-8 py-2 rounded",
		link: "text-indigo-500 px-8 py-2 hover:bg-indigo-100 rounded text-lg text-center"
	}
}

const TInput = {
	classes:
		"flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
}

const settings = {
	TAlert,
	TButton,
	TInput
}

export default settings
