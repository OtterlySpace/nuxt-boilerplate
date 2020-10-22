<template>
	<div class="flex cursor-pointer bg-gray-200 rounded h-full items-center">
		<div class="flex flex-grow">
			<div>
				<div v-if="todo.done" class="p-4" @click.stop="toggleTodo">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
				<div v-else class="p-4" @click.stop="toggleTodo">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
			</div>
			<div
				class="flex-grow py-4 font-medium"
				:class="{ 'line-through': todo.done }"
				@click.stop="toggleTodo"
			>
				{{ todo.title }}
			</div>
		</div>
		<div class="p-4" @click.stop="removeTodo">
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { Action } from "vuex-class"

@Component({})
export default class Todo extends Vue {
	@Action("todo/updateTodo") updateTodoAction: any
	@Action("todo/removeTodo") removeTodoAction: any

	@Prop()
	public todo!: any

	toggleTodo() {
		if (this.todo.done) {
			this.updateTodoAction({
				id: this.todo.id,
				title: this.todo.title,
				done: false
			}).then(() => {})
		} else {
			this.updateTodoAction({
				id: this.todo.id,
				title: this.todo.title,
				done: true
			}).then(() => {})
		}
	}

	removeTodo() {
		this.removeTodoAction({
			id: this.todo.id
		}).then(() => {})
	}
}
</script>
