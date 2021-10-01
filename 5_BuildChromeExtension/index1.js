let myLeads = ["www.awesomelead.com", "ww.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads() {

    let listItem = ""

    for(let i=0; i< myLeads.length; i++) {
        listItem += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItem


}


