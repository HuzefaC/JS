// Listen for submit
document
  .getElementById('loan-form')
  .addEventListener('submit', calculateResults);

// Calculate results
function calculateResults(e) {
  console.log('Calculating');

  // UI variables
  const UIprincipalAmount = document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');

  const UImonthlyPayment = document.getElementById('monthly-payment');
  const UItotalPayment = document.getElementById('total-payment');
  const UItotalInterest = document.getElementById('total-interest');

  // Formula for compound interest
  // CI = P(1+r/n)**nt; p = principle amount, r = rate of interest, n = compounding frequency, t = time the interest is applied
  // If interest is compounded yearly, then n = 1;
  // if semi-annually, then n = 2;
  // quarterly, then n = 4;
  // monthly, then n = 12;
  // weekly, then n = 52;
  // daily, then n = 365

  const principalAmount = parseFloat(UIprincipalAmount.value);
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  // Monthly payments

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principalAmount * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = (
      monthly * calculatedPayments -
      principalAmount
    ).toFixed(2);
  } else {
    console.log('Error');
  }
  e.preventDefault();
}
