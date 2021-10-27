const teamImg = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container-img")

function renderImg() {
    let imgDOMContainer = ""
    for(let i= 0; i<teamImg.length; i++) {
        imgDOMContainer += `<img alt="team in company" class="team-img" src="${teamImg[i]}">`
    }
    container.innerHTML = imgDOMContainer

}

renderImg()