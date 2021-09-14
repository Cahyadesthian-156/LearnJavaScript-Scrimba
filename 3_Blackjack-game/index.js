//sampai Build a Blackjack game nomer 15
let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard
//console.log(sum);

let hasBlackJack = false

let isAlife = true;

let message=""
//let message = ""  //bisa gini juga

var messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {

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

}



//console.log(hasBlackJack);
//console.log(isAlife);





