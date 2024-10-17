let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let preguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Enter Valid a Number');
    }
    else if (guess < 1) {
        alert('Enter Greater 1 a Number');
    }
    else if (guess > 10) {
        alert('Enter 100 Under a Number');
    }
    else {
        preguess.push(guess);
        if (numguess === 3) {
            displayGuess(guess);
            displayMassege(`Game Is Over : Random Number ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMassege('Victory Right Guessed ');
    }
    else if (guess < randomNumber) {
        displayMassege('Number is Low ');
    }
    else if (guess > randomNumber) {
        displayMassege('Number is High ');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displayMassege(massage) {
    lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame(guess) {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="GameOver">Start New Game"</h2>';
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(guess) {
    const newGameButtton = document.querySelector('#newGame');
    newGameButtton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 10 + 1));
        preguess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numguess},`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    })
}