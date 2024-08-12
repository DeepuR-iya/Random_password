const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passGen = document.getElementById("GenerateButton")
let randLeftpass = document.getElementById("leftpass")
let randRightpass = document.getElementById("rightpass")

passGen.addEventListener("click", function () {
    randLeftpass.textContent = ""
    randRightpass.textContent = ""
    randLeftpass.textContent = randomPasswordGenerate()
    randRightpass.textContent = randomPasswordGenerate()

})


let randPassLimit = 15

let passLimit = randPassLimit

function randomPasswordGenerate() {
    let newPassword = ""
    for (let i = 0; i < passLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomNumber]
    }
    return newPassword
}