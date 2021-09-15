/*
Math Random 0.00 --> 0.99
Math Random*6 0.00 --> 5.99


*/


let randomNumber = Math.random()

console.log(randomNumber);


let randNum = Math.random() * 6
console.log(randNum);

let bilBulat =Math.floor(randNum)
console.log(bilBulat);


console.log("How many possibel value");
let bilRandom = Math.floor(Math.random()*6)
for(let i=0; i<100; i++) {
    console.log(bilRandom);
}


