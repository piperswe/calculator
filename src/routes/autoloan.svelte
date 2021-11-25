<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { formatCurrency } from '$lib/format';
	import { aprToInterestRate } from '$lib/math';
	import { parseMoney, parseNumber, parsePercent } from '$lib/parse';

	import { Col, Input, InputGroup, InputGroupText, Label, Row } from 'sveltestrap';

	let loanAmountInput = '20,000';
	let aprInput = '3';
	let termInput = '36';

	$: loanAmount = parseMoney(loanAmountInput);
	$: apr = parsePercent(aprInput);
	$: term = parseNumber(termInput);

	$: monthlyInterestRate = aprToInterestRate(apr);

	$: totalAmount = loanAmount * (1 + monthlyInterestRate * term);

	$: payment = totalAmount / term;
	$: totalInterest = totalAmount - loanAmount;
</script>

<h1>Auto Loan Calculator</h1>

<Label for="loanAmount">Loan Amount</Label>
<InputGroup>
	<InputGroupText>$</InputGroupText>
	<Input id="loanAmount" bind:value={loanAmountInput} />
</InputGroup>

<Row>
	<Col>
		<Label for="apr">Interest Rate (APR)</Label>
		<InputGroup>
			<Input id="apr" bind:value={aprInput} />
			<InputGroupText>%</InputGroupText>
		</InputGroup>
	</Col>

	<Col>
		<Label for="term">Term</Label>
		<InputGroup>
			<Input id="term" bind:value={termInput} />
			<InputGroupText>months</InputGroupText>
		</InputGroup>
	</Col>
</Row>

<ul>
	<li>Payment: {formatCurrency(payment)}/month</li>
	<li>Total interest over term: {formatCurrency(totalInterest)}</li>
</ul>
