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
const canvas = document.querySelector('#confetti')


//Functia ce afiseaza mesajul
function displayMessage(message) {
	messageIfCHekced.textContent = message
}


//Verificare numar corect prin tastarea butonului 'Enter'
userInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		check()
	}
})
//Verificare numar corect prin mouse click sting
checkBtn.addEventListener("click", check)
	
//Functia de verificare
function check() {
	let guess = Number(userInput.value)
	if (!guess || guess < 1 || guess > 20) {
		displayMessage("N-ati urmat condiile jocului 🛑")
	} else if (guess == randNum) {
		guessedNumber.textContent = guess
		displayMessage("Bingo 🏆")
		document.body.style.backgroundColor = "#1aaf53"
		const jsConfetti = new JSConfetti()
		jsConfettu.addConfetti()
		if (score > highscore) {
			highscore = score
			highscoreElement.textContent = score
		}
	} else if (guess !== randNum) {
		
		if (score > 1) {
			displayMessage(guess > randNum ? "To high 🔺" : "To low 🔻")
			score--
			scoreElemement.textContent = score
			userInput.value = ''
		} else {
			displayMessage('Game Over !!! 😭')
			scoreElemement.textContent = '0'
			document.body.style.backgroundColor = "#e70606";
		}
	} /*else if (guess < randNum) {
		if (score > 1) {
			messageIfCHekced.textContent = "To low 🔻"
			score--
			scoreElemement.textContent = score
			userInput.value = ''
		} else {
			messageIfCHekced.textContent = "Game Over !!! 😭"
			scoreElemement.textContent = "0"
			document.body.style.backgroundColor = '#e70606'
		}
	}*/
}


againButton.addEventListener('click', function () {
	randNum = Math.floor((Math.random() * 20) + 1)
	score = 20
	scoreElemement.textContent = score
	displayMessage("Start guessing...")
	document.body.style.backgroundColor = ""
	userInput.value = ''
	guessedNumber.textContent = '?'
})