<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<Introduction :content="$t('onboard.register-form')" />
				<Input
					:placeholder="$t('user.username')"
					type="text"
					@input="(val) => input('username', val)"
				/>
				<Input
					:placeholder="$t('user.email')"
					type="email"
					@input="(val) => input('email', val)"
				/>
				<Input
					:placeholder="$t('user.password')"
					type="password"
					@input="(val) => input('password', val)"
				/>
				<Input
					:placeholder="$t('user.password-repeat')"
					type="password"
					@input="(val) => input('passwordRepeat', val)"
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

@Component({})
export default class UsersCreate extends Vue {
	layout = "default"
	data() {
		return {
			header_options: {
				active: false
			}
		}
	}

	input(field: string, value: string) {
		console.log(field, value)
	}

	register() {
		this.$router.push("/todos")
	}

	login() {
		this.$router.push("/")
	}
}
</script>
