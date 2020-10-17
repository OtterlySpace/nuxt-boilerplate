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
	async createUser({ commit }: any, payload: User) {
		const { email, username, password } = payload
		const { data } = await apolloClient.mutate({
			mutation: userMutationCreate(email, username, password)
		})
		commit("setUser", data.createUser)
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
			query: userQuery()
		})
		commit("setUser", data.me)
	},
	logoutUser({ commit }: any) {
		// @ts-expect-error missing declaration
		this.$axios
			.$get(`${process.env.API_URL}/auth/logout`, {
				withCredentials: true
			})
			.then((_resp: any) => {
				commit("setUser", {})
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
