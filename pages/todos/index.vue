<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :displayLogout="true" />
			<div class="grid grid-cols-1 gap-4">
				<div class="flex bg-green-200 rounded p-4 h-full items-center">
					<svg
						class="w-6 h-6 mr-3"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<div class="flex-grow font-medium">
						<Input
							:placeholder="$t('todo.title')"
							type="text"
							@input="(val) => (title = val)"
							@keyup.enter.native="addTodo"
						/>
					</div>
				</div>
				<Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State, Getter, Action, Mutation, namespace } from "vuex-class"

@Component({})
export default class TodosPage extends Vue {
	@Action("todo/addTodo") addTodoAction: any
	@Action("todo/loadTodos") loadTodosAction: any
	@Getter("todo/getTodos") todos: any

	layout = "default"

	title = ""

	computed() {
		return {
			todos: this.todos
		}
	}

	created() {
		this.loadTodosAction()
			.then(() => {
				this.$router.push("/todos")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	addTodo() {
		this.addTodoAction({
			title: this.title
		})
			.then(() => {
				this.$router.push("/todos")
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
</script>
