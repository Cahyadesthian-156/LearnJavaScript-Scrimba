//sampai Build a Blackjack game nomer 15
let firstCard = 10
let secondCard = 11

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
//console.log(sum);

let hasBlackJack = false

let isAlife = true;

let message=""
//let message = ""  //bisa gini juga

let messageEl = document.getElementById("message-el")
//console.log(messageEl)

let sumEl = document.getElementById("sum-el");
//console.log(sumEl);

let cardEl = document.getElementById("card-el");
console.log(cardEl);


function startGame() {
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    if(sum<=20) {
        message = "Wanna draw a new Card ? " 
    } else if (sum === 21) {
        message = "Woohoooo!, You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "Sorry, you need to out of game  "
        isAlife = false
    }
    
    //console.log(message);
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

//console.log(hasBlackJack);
//console.log(isAlife);

function newCard() {
    console.log("Drawing new card from the Deck!");

    let card = 4

    sum += card
    cards.push(card)

    renderGame()

}






