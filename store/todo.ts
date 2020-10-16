import gql from "graphql-tag"
import { apolloClient } from "@/plugins/vue-apollo"

export const state = () => ({
	project: null
})

function projectQuery(uid) {
	return gql`
		query projects {
			project(id: "${uid}") {
				platform
				videoId
				title
				uid
				annotations {
					uid
					title
					body
				}
			}
		}
	`
}

function projectMutationAdd(uid) {
	return gql`
		mutation {
			createProject(
				createProjectInput: {
					platform: "youtube"
					videoId: "${uid}"
					title: "Mon nouveau projet"
				}
			) {
				platform
				videoId
				title
				uid
			}
		}
	`
}

export const actions = {
	async loadProject({ commit }, payload) {
		const { data } = await apolloClient.query({
			query: projectQuery(payload)
		})

		commit("setProject", data.project)
	},
	async addProject({ commit }, payload) {
		const { data } = await apolloClient.mutate({
			mutation: projectMutationAdd(payload)
		})
		console.log(data)
		commit("setProject", data.createProject)
		return data.createProject
	}
}

export const mutations = {
	setProject(state, payload) {
		state.project = { ...payload }
	}
}

export const getters = {
	getProject: (state) => {
		return state.project
	}
}
