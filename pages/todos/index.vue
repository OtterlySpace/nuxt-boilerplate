<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<TodoAdd />
				<Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class TodosPage extends Vue {
	layout = "default"
	data() {
		return {
			header_options: {
				active: true
			},
			todos: [
				{ id: 1, title: "Manger des pommes", done: false },
				{ id: 2, title: "Boire de l'eau", done: true },
				{ id: 3, title: "Boire un café republicain", done: false },
				{ id: 4, title: "Faire des courses", done: true },
				{ id: 5, title: "Appeller le PR", done: false }
			]
		}
	}
}
</script>
