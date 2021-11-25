<script lang="ts">
	import { Content, Header, HeaderNav, HeaderNavItem } from 'carbon-components-svelte';
	import { page } from '$app/stores';
	import '../app.scss';
</script>

<Header company="Piper's" platformName="Calculators" href="/">
	<HeaderNav>
		<HeaderNavItem
			href="/autoloan"
			text="Auto Loan"
			isSelected={$page.path.startsWith('/autoloan')}
		/>
	</HeaderNav>
</Header>

<Content>
	<slot />
</Content>
