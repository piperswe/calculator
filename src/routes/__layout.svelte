<script lang="ts">
	import {
		Content,
		Header,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent
	} from 'carbon-components-svelte';
	import { Car20 } from 'carbon-icons-svelte';
	import { page } from '$app/stores';
	import '../app.scss';

	let isSideNavOpen = false;
</script>

<Header company="Piper's" platformName="Calculators" href="/" bind:isSideNavOpen>
	<div slot="skip-to-content">
		<SkipToContent />
	</div>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
	<SideNavItems>
		<SideNavLink
			icon={Car20}
			href="/autoloan"
			text="Auto Loan"
			isSelected={$page.path.startsWith('/autoloan')}
		/>
	</SideNavItems>
</SideNav>

<Content>
	<slot />
</Content>
