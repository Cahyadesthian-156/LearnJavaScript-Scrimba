/**
 * 
 * 1. grab teh box from DOM and store it in a variable
 * 2. add a click event listener to hte box
 * 3. log out "I want to obe the box! when it clicked"
 * 
 */

let boxOpen = document.getElementById("box")
// console.log(boxOpen);
boxOpen.addEventListener("click", function() {
    console.log("I want to open the box!");
})

