<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<H1 :content="$t('onboard.welcome')" />
				<Introduction :content="$t('onboard.intro')" />
				<Input
					:placeholder="$t('user.username')"
					type="text"
					@input="(val) => input('username', val)"
				/>
				<Input
					:placeholder="$t('user.password')"
					type="password"
					@input="(val) => input('password', val)"
				/>
				<ButtonLarge :content="$t('actions.login')" @click="login" />
				<ButtonLarge
					alt
					:content="$t('actions.register')"
					@click="register"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class HomePage extends Vue {
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
		this.$router.push("/account/create")
	}

	login() {
		this.$router.push("/todos")
	}
}
</script>
