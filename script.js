//  Afisam numarul introdus manual in urma tastarii butonului check!
let clckBtn = document.querySelector(".check");

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
})