console.log("You are awesome!");


// cara ini perlu onclick di html(onclick="saveLead()"), ada cara lain yang lebih clean(HTMLnya cuma html, yitu oake addEventListener)
/* 
function saveLead() {
    console.log("Button Clicked!");
}*/


let myLeads = ["item1", "item2", "item3"]

const inputEl = document.getElementById("input-el")
/*console.log(inputEl);*/

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")
// console.log(ulEl);

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    console.log(myLeads);
})

for(let i=0; i< myLeads.length; i++) {
    //console.log(myLeads[i]);
    
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    //ada cara lain dari penulisan kode diatas

    //create el -> set content -> append to ul
    /*
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
    */


}





