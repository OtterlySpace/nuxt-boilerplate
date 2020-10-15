<template>
	<div class="container mx-auto px-2">
		<div>
			<Header :options="header_options" />
			<div class="grid grid-cols-1 gap-4">
				<H1 content="Bienvenue👋" />
				<Introduction
					content="Connectez-vous pour consulter votre todo list"
				/>
				<Input placeholder="Username" type="text" />
				<Input placeholder="Mot de passe" type="password" />
				<ButtonLarge to="todos/" content="Se connecter" />
				<ButtonLargeAlt to="account/create" content="S'inscrire" />
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
