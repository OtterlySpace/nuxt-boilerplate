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
					@keyup.enter.native="login"
				/>
				<t-button @click="login">{{ $t("actions.login") }}</t-button>

				<ButtonLarge
					alt
					:content="$t('actions.register')"
					@click="register"
				/>

				<t-alert
					:classes="settings.TAlert.classes"
					variant="danger"
					:variants="settings.TAlert.variants"
					show
				>
					Oops! Something goes wrong
				</t-alert>

				<t-alert variant="success" show>
					Good work, everything is working as expected!
				</t-alert>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"
import { TButton, TInput, TAlert } from "vue-tailwind"
import settings from "~/plugins/todoListTheme"

@Component({
	components: { TButton, TInput, TAlert }
})
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

	settings = settings

	computed() {
		return {
			user: this.user
		}
	}

	created() {
		this.loadUserAction()
			.then(() => {
				this.$router.push("/todos")
			})
			.catch((err: any) => {
				console.log(err)
			})
	}

	register() {
		this.$router.push("/users/create")
	}

	login() {
		this.loginUserAction({
			username: this.username,
			password: this.password
		})
			.then(() => {
				this.$router.push("/todos")
			})
			.catch((err: any) => {
				console.log(err)
			})
	}
}
</script>
