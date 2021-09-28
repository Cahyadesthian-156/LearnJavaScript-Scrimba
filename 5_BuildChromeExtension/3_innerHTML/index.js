const containerEl = document.getElementById("container")
// console.log(container);

//containerEl.innerHTML += "<button>" + "Buy!" + "<!button>"
containerEl.innerHTML += "<button>Buy!<!button>"

containerEl.addEventListener("click", function() {
    containerEl.innerHTML += "<p>Thank You for buying</p>"
})