let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

//this called as object
let player = {
    name: "Cahyul",
    chips: 999
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//create function getRancomcard(), first it gonna just return number 5
function getRandomCard() {

    let randomCard = Math.floor(Math.random()*14)+1

    if (randomCard===1) {
        randomCard = 11
    } else if (randomCard > 10) {
        randomCard = 10
    }


    return randomCard
}



function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true
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

    //only allow player get new card if she alive
    if(isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard

        cards.push(newCard)
        renderGame()
    }
    
}