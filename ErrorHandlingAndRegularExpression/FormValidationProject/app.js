// Adding event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

function validateName() {
  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,10}$/;

  if (!regex.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZipcode() {
  const zip = document.getElementById('zipcode');
  const regex = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regex.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  console.log('In');
  const email = document.getElementById('email');
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2-5})$/;

  if (!regex.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhoneNumber() {
  const phone = document.getElementById('phone');
  const regex = /^[0-9]{10,12}$/;

  if (!regex.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
