export interface User {
	id: string
	email: string
	username: string
	firstName: string
	lastName: string
	password: string
}

export interface Todo {
	id: string
	author: User
	title: string
	done: boolean
}
