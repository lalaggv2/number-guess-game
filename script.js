

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
//guessField.focus();

let randomNumber = Math.floor(Math.random() * 100) + 1;;
console.log(randomNumber);

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHigh.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "GAME OVER!! SORRY!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  //guessField.focus();
};

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Play new game";
  //resetButton = document.querySelector('#resetb');
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
