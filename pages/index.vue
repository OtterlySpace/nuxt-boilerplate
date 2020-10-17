<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="headerOptions" />
			<div class="grid grid-cols-1 gap-4">
				<H1 :content="$t('onboard.welcome')" />
				<Introduction :content="$t('onboard.intro')" />
				<Input
					:placeholder="$t('user.username')"
					type="text"
					@input="(val) => (username = val)"
				/>
				<Input
					:placeholder="$t('user.password')"
					type="password"
					@input="(val) => (password = val)"
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
import { State, Getter, Action, Mutation, namespace } from "vuex-class"
import { User } from "~/store/types"

@Component({})
export default class HomePage extends Vue {
	@Action("user/loginUser") loginUserAction: any
	@Action("user/loadUser") loadUserAction: any
	@Getter("user/getUser") user: any

	layout = "default"

	headerOptions = {
		active: false
	}

	username = ""

	password = ""

	computed() {
		return {
			user: this.user
		}
	}

	created() {
		this.loadUserAction()
	}

	register() {
		this.$router.push("/account/create")
	}

	login() {
		this.loginUserAction({
			username: this.username,
			password: this.password
		})
		// this.$router.push("/todos")
	}
}
</script>
