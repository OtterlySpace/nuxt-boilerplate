import gql from "graphql-tag"
import { apolloClient } from "@/plugins/vue-apollo"
import { User } from "./types"

interface UserState {
	user: User | null
}

export const state = () => ({
	user: null
})

function userMutationCreate(email: string, username: string, password: string) {
	return gql`
		mutation {
			createUser(
				createUserInput: {
					email: "${email}"
					username: "${username}"
					password: "${password}"
				}
			) {
				id
				email
				lastName
				firstName
				username
			}
		}
	`
}

function userMutationLogin(username: string, password: string) {
	return gql`
		mutation {
			loginUser(
				loginUserInput: { username: "${username}", password: "${password}" }
			) {
				id
				email
				lastName
				firstName
				username
			}
		}
	`
}

function userQuery() {
	return gql`
		query {
			me {
				id
				email
				username
				firstName
				lastName
				todos {
					id
					title
				}
			}
		}
	`
}

export const actions = {
	async createUser({ _commit }: any, payload: User) {
		const { email, username, password } = payload
		await apolloClient.mutate({
			mutation: userMutationCreate(email, username, password)
		})
	},
	async loginUser({ commit }: any, payload: User) {
		const { username, password } = payload
		const { data } = await apolloClient.mutate({
			mutation: userMutationLogin(username, password)
		})
		commit("setUser", data.loginUser)
	},
	async loadUser({ commit }: any) {
		const { data } = await apolloClient.query({
			query: userQuery(),
			fetchPolicy: "no-cache"
		})
		commit("setUser", data.me)
	},
	logoutUser({ commit }: any): Promise<any> {
		// @ts-expect-error missing declaration
		return this.$axios
			.$get(`${process.env.API_URL}/auth/logout`, {
				withCredentials: true
			})
			.then((_resp: any) => {
				commit("todo/setTodos", [], { root: true })
				commit("removeUser")
			})
	}
}

export const mutations = {
	setUser(state: UserState, payload: User) {
		state.user = { ...payload }
	},
	removeUser(state: UserState) {
		state.user = null
	}
}

export const getters = {
	getUser: (state: UserState) => {
		return state.user
	}
}
