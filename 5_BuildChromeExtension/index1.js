let myLeads = ["www.awesomelead.com", "ww.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    console.log(myLeads);
})

//1 create variable, listItem, hold all html for list item, assign it to an empty string to begin with
let listItem = ""

for(let i=0; i< myLeads.length; i++) {
        
    //2 add the item to the listItem variabel instead of the ulEl .innerHTML
    listItem += "<li>" + myLeads[i] + "</li>"
    console.log(listItem);
}

//3 Render the listItem inside the unordered list using ulEl.inenrHTML
ulEl.innerHTML = listItem

