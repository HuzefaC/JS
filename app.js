const name = "Jhon";
const age = 30;
const job = "Web Developers";
const city = "Miami";
let html;

// using template literals
html = `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
        </ul>`;

document.body.innerHTML = html;

