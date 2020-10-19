export function errorHandler(err: any): void {
	console.table(err)
	if (err.graphQLErrors) {
		console.log(err.graphQLErrors)
	}
	throw err
}
