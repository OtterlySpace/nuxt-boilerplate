<template>
	<header class="text-gray-700 body-font">
		<div class="flex justify-between items-center py-5">
			<nuxt-link
				v-if="!displayLogout"
				to="/"
				class="flex title-font font-medium items-center text-gray-900"
			>
				<img
					src="~/assets/images/brand-alt.png"
					width="60"
					alt="Le logo d'Otterly"
				/>
				<span class="sm:ml-2 text-xl">{{ $t("app.name") }}</span>
			</nuxt-link>
			<nuxt-link
				v-if="displayLogout"
				to="/todos"
				class="flex title-font font-medium items-center text-gray-900"
			>
				<img
					src="~/assets/images/brand-alt.png"
					width="60"
					alt="Le logo d'Otterly"
				/>
				<span class="sm:ml-2 text-xl">{{ $t("app.name") }}</span>
			</nuxt-link>
			<div
				v-if="displayLogout"
				class="cursor-pointer inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base"
				@click="logout"
			>
				<svg
					class="w-5 h-5 mr-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				{{ $t("actions.logout") }}
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { Action } from "vuex-class"

@Component({})
export default class Header extends Vue {
	@Action("user/logoutUser") logoutUserAction: any

	@Prop({ default: false, type: Boolean })
	public displayLogout!: boolean

	logout() {
		this.logoutUserAction()
			.then(() => {
				this.$router.push("/")
			})
			.catch((err: any) => {
				console.log(err)
			})
	}
}
</script>
