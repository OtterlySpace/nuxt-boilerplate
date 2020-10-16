import fetch from "node-fetch"

import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: process.env.API_URL,
	fetch
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
	link: httpLink,
	cache
})

// Vue.use(VueApollo)
