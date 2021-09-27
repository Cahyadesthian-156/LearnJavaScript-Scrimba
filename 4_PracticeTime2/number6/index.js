let hands = ["rock", "paper", "scissor"]

//function return random hand
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

// math.random will give you 0 to 0.999
// so when we multiply it by 3 we will get untuil 2.99999
//so in order to get 0 untuil 2 (because of aour array consist of 0,1,2 index)

console.log(getHand());