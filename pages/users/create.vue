<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :displayLogout="false" />
			<div class="grid grid-cols-1 gap-4">
				<Introduction :content="$t('onboard.register-form')" />

				<Input
					:placeholder="$t('user.username')"
					type="text"
					@input="(val) => (username = val)"
				/>
				<Input
					:placeholder="$t('user.email')"
					type="email"
					@input="(val) => (email = val)"
				/>
				<Input
					:placeholder="$t('user.password')"
					type="password"
					@input="(val) => (password = val)"
				/>
				<Input
					:placeholder="$t('user.password-repeat')"
					type="password"
					@input="(val) => (passwordReapet = val)"
				/>
				<ButtonLarge
					:content="$t('actions.register')"
					@click="register"
				/>

				<ButtonLarge
					alt
					:content="$t('actions.login')"
					@click="login"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State, Getter, Action, Mutation, namespace } from "vuex-class"

@Component({})
export default class UsersCreate extends Vue {
	@Action("user/createUser") createUserAction: any
	@Action("user/loadUser") loadUserAction: any
	@Getter("user/getUser") user: any

	// VAR
	layout = "default"

	username = ""
	email = ""
	password = ""
	passwordReapet = ""

	computed() {
		return {
			user: this.user
		}
	}

	register() {
		this.createUserAction({
			email: this.email,
			username: this.username,
			password: this.password
		})
			.then(() => {
				this.$router.push("/todos")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	login() {
		this.$router.push("/")
	}
}
</script>
