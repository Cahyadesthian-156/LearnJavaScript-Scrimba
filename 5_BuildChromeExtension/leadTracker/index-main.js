let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage) {
    myLeads = leadFromLocalStorage   
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    //console.log("double click");
    localStorage.clear()
    myLeads=[]
    renderLeads()
})


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