<script lang="ts">
	import { Container } from 'sveltestrap';
	import '../app.scss';
</script>

<Container>
	<h1>Piper's Calculators</h1>
	<a href="/">&larr; back to home</a>
	<hr />
	<slot />
</Container>
