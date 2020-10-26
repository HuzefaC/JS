const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// Clear Input
taskInput.value = '';

// Submit EventListener
form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// // Keyup
// taskInput.addEventListener('keyup', runEvent);

// // Keypress
// taskInput.addEventListener('keypress', runEvent);

// // Focus
// taskInput.addEventListener('focus', runEvent);

// // Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Copy
taskInput.addEventListener('copy', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

// Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  console.log(taskInput.value);
  //e.preventDefault();
}
