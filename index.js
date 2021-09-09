//document.getElementById("count-el").innerText=40;

//stiore dara on variabel
// let count = 12;

// console.log(count);

//console.log(myAge);
/*
//1 create varible my age
let myAge = 21;
//2 print it
console.log(myAge);
*/

// let myAge = 21;
// let humaDogRatio = 7;

// let myDogAge = myAge*humaDogRatio;

// console.log(myDogAge);


//let count = 0;




// function count() {
//     console.log("6");
//     console.log("5");
//     console.log("4");
//     console.log("3");
//     console.log("2");
//     console.log("1");
// }

// count();

/*
// [--- TOMBOL INCREMENT/COUNT ---]
let ygDiTombol = 0;
//untuk membuat counter bertambah saat tombol di klik
function increment() {
    //console.log("Buttonnya di click");
    ygDiTombol += 1;
    document.getElementById('count-el').innerText=ygDiTombol;
}*/

// [ bentuk lain penampbahan diatas ]
/*
let countEl = document.getElementById('count-el');
let count = 0;
//cara biar yang di klik nambah
function incremen() {
    count = count + 1;
    countEl.innerText = count;
}
*/

/*
// [--TOMBOL SAVE--]
let entries_log = ygDiTombol + " - "
function save() {
    //console.log(ygDiTombol);
    console.log(entries_log);
}
*/


//[exercise string]
// let message = "You have a new notification"

// let username = "cahya"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser);

// let name = "Cahyadesthian"
// let greetin = "Hi, my name is "
// let myGreeting = greetin + name

// console.log(myGreeting);



// [---Tombol itu Lagi---]
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);
console.log(saveEl);

let counter = 0;

function increment() {
    counter += 1;
    countEl.innerText = counter;
}

function save() {
    //console.log(counter);
    let counterStr = counter + " - "
    saveEl.innerText += counterStr
    console.log(counter);
}
















