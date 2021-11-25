const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function formatCurrency(amount: number): string {
  return currency.format(amount);
}

const percent = new Intl.NumberFormat('en-US', {
  style: 'percent',
})

export function formatPercent(amount: number): string {
  return percent.format(amount);
}
