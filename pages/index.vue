<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="headerOptions" />
			<transition name="fade" appear>
				<div class="grid grid-cols-1 gap-4">
					<Introduction :content="$t('onboard.welcome')" />
					<Introduction :content="$t('onboard.intro')" />

					<t-input
						v-model="username"
						:placeholder="$t('user.username')"
						type="text"
					/>

					<t-input
						v-model="password"
						:placeholder="$t('user.password')"
						type="password"
						@keyup.enter.native="login"
					/>

					<t-button @click="login">{{
						$t("actions.login")
					}}</t-button>

					<t-alert
						variant="danger"
						:dismissible="false"
						:show="submitReturnError"
					>
						{{ $t("alert.loginUser.error") }}
					</t-alert>

					<t-button variant="link" @click="register">{{
						$t("actions.register")
					}}</t-button>
				</div>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"

@Component({})
export default class HomePage extends Vue {
	@Action("user/loginUser") loginUserAction: any
	@Action("user/loadUser") loadUserAction: any
	@Getter("user/getUser") user: any

	headerOptions = {
		active: false
	}

	username = ""

	password = ""

	submitReturnError = false

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
			.catch((_err: any) => {
				// Empty catch because we expect an error (if user isn't logged in)
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
			.catch(({ graphQLErrors }: any) => {
				const message =
					graphQLErrors[0].extensions.exception.response.message

				if (message.length && message.length > 0) {
					const errors = message.map((mess: string) => this.$t(mess))
					console.error(errors)
				}
				this.submitReturnError = true
			})
	}
}
</script>
