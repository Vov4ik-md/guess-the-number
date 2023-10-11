/*console.log(document.getElementById('myHeader'))
const myElement = document.getElementsByClassName('btn tryagain')
console.log(myElement, 'my element')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons, 'all buttons')
const mytext = document.querySelector('.text')
console.log(mytext, 'my text')
mytext.textContent = 'Incepe a ghici'
document.querySelector('.tryagain').setAttribute('title', 'try again')
document.getElementsByTagName('h1').innerText = 'Ghiceste numarul'
document.querySelector('h1').textContent = 'Ghiceste numarul'
const myNewEl = document.createElement('div')
myNewEl.textContent = 'ai 20 de incercari'
console.log(myNewEl)
const beforeEl = document.querySelector('.label-score')
document.querySelector('.right').insertBefore(myNewEl, beforeEl)*/

//Manipulating CSS

/*const buttonAgain = document.querySelector('.tryagain')

if (buttonAgain.innerText === 'Again') {
	buttonAgain.style.backgroundColor = 'green'
} else {
	buttonAgain.style.backgroundColor = 'blue
}*/

//cssText

//document.querySelector('h1').style.cssText = 'font-family: Sans-serif; color: red; font-size: 16px'

//  ClassList

//  Events
function chgCol() {
  selectNumber.style.backgroundColor = "red";
}

let selectNumber = document.querySelector(".number");
//prindem eventul mouseEnter si schimbam culoarea in rosu
selectNumber.addEventListener("mouseenter", chgCol);
//capturam clickul pe el si chemam functie externa
selectNumber.addEventListener("click", function () {
  afisat("click");
  selectNumber.removeEventListener("mouseenter", chgCol);
});
// salvam functia aparte

function afisat(a) {
  selectNumber.textContent = a;
}

//capturam iesirea mouse-ului din element si returnam valorile initiale

const culoareaInitiala = (selectNumber.style.backgroundColor = "white");

selectNumber.addEventListener("mouseleave", function () {
  selectNumber.style.backgroundColor = culoareaInitiala;
  selectNumber.textContent = "?";
});

//remove event Listner

//selectNumber.removeEventListener('mouseenter', chgCol)
