///Array - ordered lists of items

let featuredPost = [
    "Checkout my Netflix clone",
    "Here's the code for my project",
    "I ve just relaunched my Portofolio"
]

/*
let experience = [
    "Hipster at some new things",
    "Designer using Photoshop adn Figma",
    "Informatics Bachelor",
    "Dicoding Certification, UX Designer RuangGuru"
]
*/

let experience = [
    "CEO at Scrimba",
    "Frontend developer at Xeneta",
    "People counter for Norstat"
]

console.log(featuredPost[2]);
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);
console.log(experience.length);



//multiple data type in anoe array
let cahya = [
    "Cahyadesthian",
    21,
    false
]


//adding and removing from array
let cardsInHand = [7,4]
cardsInHand.push("ace")
console.log(cardsInHand);


//push the newMessage ti message array and than log out the array
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portofolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);
console.log(messages);

//how can you remove last item in Array? try google it
//done, find the anwer lets write it
messages.pop()
console.log(messages);



