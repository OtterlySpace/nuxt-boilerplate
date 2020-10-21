<template>
	<div class="container mx-auto px-2">
		<div>
			<Header display-logout />
			<transition name="fade" appear>
				<div
					class="flex rounded lg:px-0 px-4 mt-2 mb-8 h-full items-center"
				>
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
					<div class="flex-grow">
						<t-input
							v-model="title"
							:placeholder="$t('todo.title')"
							type="text"
							@keyup.enter.native="addTodo"
						/>
					</div>
				</div>
			</transition>
			<transition-group
				name="fade"
				tag="div"
				class="grid lg:grid-cols-4 grid-cols-1 gap-4"
			>
				<Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
			</transition-group>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"

@Component({})
export default class TodosPage extends Vue {
	@Action("todo/addTodo") addTodoAction: any
	@Action("todo/loadTodos") loadTodosAction: any
	@Getter("todo/getTodos") todos: any

	layout = "default"

	title = ""

	computed() {
		return {
			todos: []
		}
	}

	created() {
		this.loadTodosAction().catch((err: any) => {
			console.log(err)
			this.$router.push("/")
		})
	}

	addTodo() {
		this.addTodoAction({
			title: this.title
		})
			.then(() => {
				this.title = ""
			})
			.catch((err: any) => {
				console.log(err)
			})
	}
}
</script>
