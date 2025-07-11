import fetch from "node-fetch"

import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: `${process.env.apiUrl}/graphql`,
	// @ts-ignore
	fetch,
	credentials: "include"
})

// Cache implementation
const cache = new InMemoryCache({
	addTypename: false
})

// Create the apollo client
export const apolloClient = new ApolloClient({
	link: httpLink,
	cache
})

// Vue.use(VueApollo)
