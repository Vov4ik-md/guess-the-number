console.log(document.getElementById('myHeader'))
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
document.querySelector('.right').insertBefore(myNewEl, beforeEl)


//Manipulating CSS

const buttonAgain = document.querySelector('.tryagain')

if (buttonAgain.innerText === 'Again') {
	buttonAgain.style.backgroundColor = 'green'
} else {
	buttonAgain.style.backgroundColor = 'blue'
}

//cssText

document.querySelector('h1').style.cssText = 'font-family: Sans-serif; color: red; font-size: 16px'

