// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Hide Results
  document.getElementById('results').style.display = 'none';

  // Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate results
function calculateResults() {
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

    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    // Show results
    document.getElementById('results').style.display = 'none';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
    showError('Enter values!!');
  }
}

// Show Error
function showError(message) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add classes to the error div
  errorDiv.className = 'alert alert-danger';

  // Set error text
  errorDiv.textContent = message;

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 secs
  setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}
