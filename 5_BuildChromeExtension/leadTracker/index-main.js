let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//sebelumnya stringnnya sudah ada di local storage, tapi kalau di refresh pagenya, yang di page hilang, untuk itu mau dibetulkan biar pas di refresh bisa ngambil apa yang ada di local sorage, yg di local storage merupakan string lho jadi kita bisa pakai JSON.parse()
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadFromLocalStorage);




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