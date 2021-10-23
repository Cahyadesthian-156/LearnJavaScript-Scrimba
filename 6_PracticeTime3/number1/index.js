console.log("Yok bisa yok");

//setting stage
const player  = "Per"
const opponent = "Nick"
const game = "Amazing Fighter"
let point = 0
let hasWon = false

//playing game
point += 100
hasWon = true

//anoune winner
if(hasWon) {
    //console.log(player + ' got ' + point + " points and won the " + game + " game!");
    console.log(` ${player} got ${point} points and won the ${game} game! `);
} else {
    console.log(`The winner is ${opponent} !  ${player} lost the game`);
}