<template>
	<div class="container mx-auto px-2">
		<div>
			<Header />
			<div class="grid grid-cols-1 gap-4">
				<Introduction :content="$t('onboard.register-form')" />

				<t-input
					v-model="username"
					:placeholder="$t('user.username')"
					type="text"
				/>
				<t-input
					v-model="email"
					:placeholder="$t('user.email')"
					type="text"
				/>

				<t-input
					v-model="password"
					:placeholder="$t('user.password')"
					type="password"
					@keyup.enter.native="login"
				/>
				<t-button @click="register">{{
					$t("actions.register")
				}}</t-button>
				<t-button variant="link" @click="login">{{
					$t("actions.login")
				}}</t-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Getter, Action } from "vuex-class"

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
				this.$router.push("/")
			})
			.catch((err: any) => {
				console.log(err)
			})
	}

	login() {
		this.$router.push("/")
	}
}
</script>
