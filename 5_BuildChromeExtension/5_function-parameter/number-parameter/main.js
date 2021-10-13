let resEl1 = document.getElementById("result-el-1") 
let resEl2 = document.getElementById("result-el-2")

function add(num1,num2) {
    let result = num1 + num2
    return result
}

resEl1.textContent = add(3,4)
resEl2.textContent = add(9,102)