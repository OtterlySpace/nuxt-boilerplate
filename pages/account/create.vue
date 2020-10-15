<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<div class="font-medium">
					Ceci est un formulaire d'inscription
				</div>
				<input
					class="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
					placeholder="Username"
					type="text"
				/>
				<input
					class="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
					placeholder="E-mail"
					type="email"
				/>
				<input
					class="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
					placeholder="Mot de passe"
					type="password"
				/>
				<input
					class="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4"
					placeholder="Répéter le mot de passe"
					type="password"
				/>
				<button
					class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>
					S'incrire
				</button>
				<nuxt-link
					to="/"
					class="text-sm text-gray-600 hover:text-gray-700 text-center"
				>
					Se connecter
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	layout: "default",
	data() {
		return {
			header_options: {
				active: false
			}
		}
	}
}
</script>
