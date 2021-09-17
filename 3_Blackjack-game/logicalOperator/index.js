let hasCompletedCourse = true
let givesCertificate = true
let cheating = false

if (hasCompletedCourse === true && givesCertificate === true && cheating === false) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating Certificate");
}


let hasSolvedChallange = false
let hasHintsLeft = false

function showSolution() {
    console.log("Showing the solution ...");
}


if(hasSolvedChallange === false && hasHintsLeft !== true) {
    showSolution()
}

let likesDocumentaries = true
let likesStartups = false

if(likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey check out this new film we think you will like!");
}





