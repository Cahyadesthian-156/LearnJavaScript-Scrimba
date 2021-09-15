let sentence = [
    "Hello",
    "My",
    "Name",
    "is",
    "Cahya"
]

let greetingEl = document.getElementById("greeting-el")
//console.log(greetingEl);


// Render the sentence in the greeting el paragraph using for loop
//greetingEl.textContent = 

for (let i=0; i<sentence.length ; i++) {
    greetingEl.textContent += sentence[i] + " "
}









