let firstCard = 10
let secondCard = 4
let cards = [
    firstCard,
    secondCard
]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    

    sumEl.textContent = "Sum: " + sum

    if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else if (sum <21) {
        message = "Wanna draw new Card ?"
    } else {
        message = "Sorry, you're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}


function newCard() {
    let newCard = 6
    sum += newCard

    cards.push(newCard)
    renderGame()
}