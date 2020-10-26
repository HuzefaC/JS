const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Event handler

function runEvent(e) {
  console.log(`Event type: ${e.type}`);
}
