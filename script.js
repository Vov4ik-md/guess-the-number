//?  Afisam numarul introdus manual in urma tastarii butonului check!
/*let clckBtn = document.querySelector(".check");

let randNum = Math.floor((Math.random() * 20) + 1)

clckBtn.addEventListener('click', function () {
	let userInput = document.querySelector(".guess").value;
	if (userInput > 1 && userInput <= 20 && userInput == randNum) {
		document.querySelector(".number").textContent = userInput
		document.querySelector(".text").innerHTML = "Bingo"
	} else if (userInput > randNum) {
		document.querySelector('.text').innerHTML = "To high"
	} else if (userInput < randNum) {
		document.querySelector(".text").innerHTML = "To low"
	} else {
		console.log('Introduceti numar intre 1 si 20')
	}
})*/

const buttonAgain = document.querySelector('.tryagain')
const butonulCheck = document.querySelector('.check')
const messageElement = document.querySelector('.text')
const secretNumberElem = document.querySelector('.number')
const guessElem = document.querySelector('.guess')
const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.higscore')

let secretNumber = Math.trunc((Math.random() * 20) + 1)
let score = 20
let highscore = 0

butonulCheck.addEventListener('click', function () {
	let guess = Number(guessElem.value)
	//if no number in input
	if (!guess) {
		messageElement.messageElement = 'No number!'
	} else if (guess == secretNumber){
		messageElement.textContent = 'Bingo'
		document.body.style.backgroundColor = 'lightgreen'
		if (score > highscore) {
			highscore = score
			highscoreEl.textContent = highscore
		}
	} else if (guess > secretNumber) {
		if (score > 1) {
			messageElement.textContent = 'To high !'
			score--
			scoreEl.textContent = score
		} else {
			messageElement.textContent = 'GAME OVER!!!'
			scoreEl.textContent = '0'
		}
	} else if (guess < secretNumber) {
		if (score > 1){
			messageElement.textContent = 'To low !'
			score--
			scoreEl.textContent = score
		} else {
			messageElement.textContent = 'GAME OVER!!!'
			scoreEl.textContent = '0'
		}	
	}
})

buttonAgain.addEventListener('click', function (event) {
	score = 20
	scoreEl.textContent = score
	secretNumber = Math.trunc((Math.random() * 20) + 1)
	messageElement.textContent = 'Start guessing...'
	document.body.style.backgroundColor = ''
	guessElem.value = ''
	secretNumberElem.textContent = '?'
})