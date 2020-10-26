const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse up
clearBtn.addEventListener('mouseup', runEvent);

// Mouse entered
card.addEventListener('mouseenter', runEvent);

// Mouse leave
card.addEventListener('mouseleave', runEvent);

// Note: mouseover and mouseout are triggered everytime the mouse is brought into any element inside the card/the element invoking the event listener. While mouseenter and mouseleave are olny fired when the mouse enters or leaves the main element and not the children elements of the main element.

// Mouse over
card.addEventListener('mouseover', runEvent);

// Mouse out
card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e) {
  e.preventDefault();
  console.log(`Event type: ${e.type}`);
  if (e.type === 'mousemove') {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`;
  }
}
