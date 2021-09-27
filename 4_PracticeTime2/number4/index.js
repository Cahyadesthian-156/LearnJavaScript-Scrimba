let largeCountries = [
    "Tuvalu", "India", "USA", "Indoensia", "Monaco"
]

//need to fix up the array so the first is China and the last is Paksitan
//using push,pop, shift and un shift
largeCountries.shift()
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.unshift("China")

console.log("5 largest countries");
for(let a = 0; a<largeCountries.length; a++) {
    console.log("-" + largeCountries[a]);
}