<template>
	<div class="cursor-pointer bg-gray-200 rounded p-4 h-full items-center">
		<div v-if="item.done" class="flex">
			<div class="" @click="uncheckTodo">
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
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</div>
			<div class="flex-grow font-medium line-through">
				{{ item.title }}
			</div>
			<div class="">
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
		<div v-else class="flex">
			<div class="" @click="checkTodo">
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
						d="M8 01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</div>
			<div class="flex-grow font-medium">{{ item.title }}</div>
			<div class="">
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
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"

@Component({})
export default class Todo extends Vue {
	@Action("todo/updateTodo") updateTodoAction: any

	@Prop()
	public todo!: any

	data() {
		return {
			item: this.todo
		}
	}

	checkTodo(this: any) {
		this.updateTodoAction({
			id: this.todo.id,
			title: this.todo.title,
			done: true
		}).then(() => {
			this.item.done = true
		})
	}

	uncheckTodo(this: any) {
		this.updateTodoAction({
			id: this.todo.id,
			title: this.todo.title,
			done: false
		})
	}
}
</script>
