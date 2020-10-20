import gql from "graphql-tag"
import { apolloClient } from "@/plugins/vue-apollo"
import { Todo } from "./types"
import { errorHandler } from "~/utils/gqlErrorHandler"

interface TodoState {
	todos: Todo[]
}

export const state = (): TodoState => ({
	todos: []
})

function todoMutationCreate(title: string) {
	return gql`
		mutation {
			createTodo(
				createTodoInput: { title: "${title}", done: false }
			) {
				id
				title
				done
				author {
					id
					username
				}
			}
		}
	`
}

function todosQuery() {
	return gql`
		query {
			todos {
				id
				title
				done
				author {
					id
					username
				}
			}
		}
	`
}

function todoMutationUpdate(id: string, title: string, done: boolean) {
	return gql`
		mutation {
			updateTodo(
				updateTodoInput: {
					id: "${id}"
					title: "${title}"
					done: ${done}
				}
			) {
				id
				title
				done
			}
		}
	`
}

function todoMutationRemove(id: string) {
	return gql`
		mutation {
			removeTodo(id: "${id}") {
				id
				title
				done
			}
		}
	`
}

export const actions = {
	async loadTodos({ commit }: any) {
		try {
			const { data } = await apolloClient.query({
				query: todosQuery(),
				fetchPolicy: "no-cache"
			})

			commit("setTodos", data.todos)
		} catch (err) {
			errorHandler(err)
		}
	},
	async addTodo({ commit }: any, payload: Todo) {
		const { title } = payload
		const { data } = await apolloClient.mutate({
			mutation: todoMutationCreate(title)
		})
		commit("updateTodos", data.createTodo)
	},
	async updateTodo({ commit }: any, payload: Todo) {
		const { id, title, done } = payload
		const { data } = await apolloClient.mutate({
			mutation: todoMutationUpdate(id, title, done)
		})
		commit("updateTodo", data.updateTodo)
	},
	async removeTodo({ commit }: any, payload: Todo) {
		const { id } = payload
		const { data } = await apolloClient.mutate({
			mutation: todoMutationRemove(id)
		})
		commit("removeTodo", data.removeTodo)
	}
}

export const mutations = {
	setTodos(state: TodoState, payload: Todo[]) {
		state.todos = [...payload]
	},
	updateTodo(state: TodoState, payload: Todo) {
		const todoIndex = state.todos.findIndex(
			(todo) => todo.id === payload.id
		)
		state.todos.splice(todoIndex, 1, payload)
		console.log(payload, todoIndex, state.todos[todoIndex])
	},
	updateTodos(state: TodoState, payload: Todo) {
		state.todos = [...state.todos, payload]
	},
	removeTodo(state: TodoState, payload: Todo) {
		const todoIndex = state.todos.findIndex(
			(todo) => todo.id === payload.id
		)
		state.todos.splice(todoIndex, 1)
	}
}

export const getters = {
	getTodos: (state: TodoState) => {
		return state.todos
	}
}
