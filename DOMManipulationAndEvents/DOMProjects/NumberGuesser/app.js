/* 
  GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Let player choose to play again
*/

// Game values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements

const UIgame = document.querySelector('#game'),
  UIminNum = document.querySelector('.min-num'),
  UImaxNum = document.querySelector('.max-num'),
  UIguessBtn = document.querySelector('#guess-btn'),
  UIguessInput = document.querySelector('#guess-input'),
  UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', guessInput);

function guessInput() {
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over won
    gameOver(true, `Congratulations YOU WON :)`);
  } else {
    // Wrong guess
    guessesLeft--;
    if (guessesLeft === 0) {
      // Game over lost
      gameOver(
        false,
        `Game Over YOU LOST :(. The winning number was ${winningNum}.`
      );
    } else {
      //Game continues answer wrong
      UIguessInput.style.borderColor = 'red';
      UIguessInput.value = '';
      setMessage(`Guess is incorrect, ${guessesLeft} guesses left`, 'red');
    }
  }
}

// Game over
function gameOver(won, message) {
  let color;
  color = won === true ? (color = 'green') : (color = 'red');
  console.log(color);
  // Disable input
  UIguessInput.disabled = true;
  // Changer border green
  UIguessInput.style.borderColor = color;

  setMessage(message, color);
}

// Set message
function setMessage(message, color) {
  UImessage.style.color = color;
  UImessage.textContent = message;
}
