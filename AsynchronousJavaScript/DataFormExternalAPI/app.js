// JSON stands for JavaScript Object Notation

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      const output = `<ul>
        <li>ID: ${customer.id}</li>
        <li>ID: ${customer.name}</li>
        <li>ID: ${customer.amount}</li>
      </ul>`;
      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);
      let output;
      const customers = JSON.parse(this.responseText);
      customers.forEach((customer) => {
        output += `<ul>
        <li>ID: ${customer.id}</li>
        <li>ID: ${customer.name}</li>
        <li>ID: ${customer.amount}</li>
      </ul>`;
      });
      document.getElementById('customers').innerHTML = output;
    }
  };

  xhr.send();
}
