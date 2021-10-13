let welcomeEl = document.getElementById("welcome-el")

function greet(greeting,name) {
    welcomeEl.textContent = `${greeting}, ${name} 🤝`
}

greet("Mowning", "Cahyul")