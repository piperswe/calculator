<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { formatCurrency } from '$lib/format';
	import Spacer from '$lib/Spacer.svelte';
	import { aprToInterestRate } from '$lib/math';

	import { Column, Dropdown, Form, Grid, Row, TextInput, Tile } from 'carbon-components-svelte';

	const terms = [12, 24, 36, 48, 60, 72, 84].map((months) => ({
		id: months.toString(),
		months,
		text: `${months} months`
	}));

	let loanAmount = 20000;
	let aprPercent = 3;
	let termInput = 2;

	$: apr = aprPercent / 100;
	$: term = terms[termInput].months;

	$: monthlyInterestRate = aprToInterestRate(apr);

	$: totalAmount = loanAmount * (1 + monthlyInterestRate * term);

	$: payment = totalAmount / term;
	$: totalInterest = totalAmount - loanAmount;
</script>

<Grid>
	<Row>
		<Column>
			<h1>Auto Loan Calculator</h1>
			<Spacer />

			<Form>
				<TextInput labelText="Loan Amount" type="number" bind:value={loanAmount} />
				<Spacer />
				<TextInput labelText="Interest Rate (APR, percent)" type="number" bind:value={aprPercent} />
				<Spacer />
				<Dropdown titleText="Term" bind:selectedIndex={termInput} items={terms} />
			</Form>
		</Column>
	</Row>
	<Row>
		<Column>
			<Spacer />
		</Column>
	</Row>
	<Row>
		<Column>
			<Tile>
				Payment
				<h2>{formatCurrency(payment)}/month</h2>
			</Tile>
		</Column>
		<Column>
			<Tile>
				Total interest paid over the term of the loan
				<h2>{formatCurrency(totalInterest)}</h2>
			</Tile>
		</Column>
	</Row>
</Grid>
