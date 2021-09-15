let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    
    if(player1Time < player2Time) {
        return player1Time
    } else if(player2Time < player1Time) {
        return player2Time
    } else {
        return player2Time
    }

}

let fastestRacer = getFastestRaceTime()
console.log(fastestRacer);

let resEl = document.getElementById("res-el")
resEl.textContent = "Racer 1 : " + player1Time + ", Racer 2 : " + player2Time + " | " + "Fastest Racer is " + fastestRacer

//create function to return total race time
function totalTime() {
    return player1Time + player2Time
}
//cal invoke the function and stored the returned value in a new variable
let totalTimeOfRacer = totalTime()

//log the variabel out
console.log(totalTimeOfRacer);



