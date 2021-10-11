let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


// chalange
/**
 * 
 * 1. save akey-value pair in local storage
 * 2. refresh the page. get the value and log it to the console
 * 3. clear localStorage
 * 
 * HINTS
 * localStorage.setItem(key,value)
 * localStorage.getItem(key)
 * localStorage.clear()
 * 
 */

//localStorage.setItem("cahyadesthian", "learning")
let activity = localStorage.getItem("cahyadesthian")
console.log(activity);

localStorage.clear()

console.log(localStorage.getItem("Cahyadesthia"));
//console.log(check);


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for(let i=0; i<myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}