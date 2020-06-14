let randomNumber = Math.floor(Math.random() * 100) + 1;;

const guesses = document.querySelector('.quesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lowOrHigh.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.getElementsByClassName.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();

};

