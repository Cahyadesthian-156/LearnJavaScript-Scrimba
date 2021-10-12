let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//localStorage.clear()
// ["lead1", "lead2"] or null
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadFromLocalStorage);
if(leadFromLocalStorage) {
    //myLeads.push(leadFromLocalStorage)    //hasilnya jadi nyamping
    myLeads = leadFromLocalStorage
    
    renderLeads()
}



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // [save the myLeads array to local Storage]
    // PS: remeber JSON.stringfy()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()

    console.log(localStorage.getItem("myLeads"));
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