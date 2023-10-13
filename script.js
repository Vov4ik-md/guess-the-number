//?  Afisam numarul introdus manual in urma tastarii butonului check!
let checkBtn = document.querySelector(".check");
let randNum = Math.floor((Math.random() * 20) + 1)
let userInput = document.querySelector(".guess")
let guessedNumber = document.querySelector(".number")
let messageIfCHekced = document.querySelector(".text")
let againButton = document.querySelector('.tryagain')
let scoreElemement = document.querySelector('.score')
let highscoreElement = document.querySelector('.highscore')
let score = 20
let highscore = 0


checkBtn.addEventListener("click", function () {
	let guess = Number(userInput.value)
	if (!guess) {
		messageIfCHekced.textContent = "N-ati introdus nici o valoare";
	} else if (guess < 1 || guess > 20) {
		messageIfCHekced.textContent = 'N-ati urmat condiile jocului 🛑'
	} else if (guess == randNum) {
		guessedNumber.textContent = guess
		messageIfCHekced.textContent = "Bingo 🏆";
		document.body.style.backgroundColor = "#1aaf53"
		if (score > highscore) {
			highscore = score
			highscoreElement.textContent = score
		}
	} else if (guess > randNum) {
		if (score > 1) {
			messageIfCHekced.textContent = "To high 🔺"
			score--
			scoreElemement.textContent = score
		} else {
			messageIfCHekced.textContent = 'Game Over !!! 😭'
			scoreElemement.textContent = '0'
			document.body.style.backgroundColor = "#e70606";
		}
	} else if (guess < randNum) {
		if (score > 1) {
			messageIfCHekced.textContent = "To low 🔻"
			score--
			scoreElemement.textContent = score
		} else {
			messageIfCHekced.textContent = "Game Over !!! 😭"
			scoreElemement.textContent = "0"
			document.body.style.backgroundColor = '#e70606'
		}
	}
});


againButton.addEventListener('click', function () {
	randNum = Math.floor((Math.random() * 20) + 1)
	score = 20
	scoreElemement.textContent = score
	messageIfCHekced.textContent = "Start guessing..."
	document.body.style.backgroundColor = ""
	userInput.value = ''
	guessedNumber.textContent = '?'
})