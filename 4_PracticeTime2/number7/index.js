let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊" ]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

console.log(appleShelf);
console.log(orangeShelf);

//create function that put aple and orange on its shelf
//use for loop and conditoinal

function sortFruit() {

    for(let i=0; i < fruit.length; i++) {
        if(fruit[i]==="🍎") {
            appleShelf.textContent += "🍎" 
        } else if(fruit[i]==="🍊") {
            orangeShelf.textContent += "🍊"
        }
    }

}


sortFruit()