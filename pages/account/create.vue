<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<Introduction content="Ceci est un formulaire d'inscription" />
				<Input placeholder="Username" type="text" />
				<Input placeholder="E-mail" type="email" />
				<Input placeholder="Mot de passe" type="password" />
				<Input placeholder="Répéter le mot de passe" type="password" />
				<ButtonLarge to="/todos" content="S'incrire" />
				<ButtonLargeAlt to="/" content="Se connecter" />
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
