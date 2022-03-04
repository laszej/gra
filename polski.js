const weapons = ["kamień", "papier", "nożyce"]
const startBtn = document.getElementById("startBtn")
const pWeapon = document.getElementById("pWeapon")
const cWeapon = document.getElementById("cWeapon")
const result = document.getElementById("result")

const randomNumber = ()=> {return Math.floor(Math.random() * weapons.length)}
const compNumber = ()=> {return Math.floor(Math.random() * weapons.length)}

startBtn.addEventListener("click", randomWeapon)

function randomWeapon(){   
let rand = randomNumber()
let compRand = compNumber()
let playerWeapon = weapons[rand]
pWeapon.innerHTML = `Twoja broń to: ${playerWeapon}`
let computerWeapon = weapons[compRand]
cWeapon.innerHTML = `Broń komputera to: ${computerWeapon}`

playerWeapon === computerWeapon ? result.innerHTML= "Zremisowałeś z komputerem" : 

playerWeapon === "papier" && computerWeapon === "nożyce" 
? result.innerHTML= "komputer wygrywa!" : 

playerWeapon === "kamień" && computerWeapon === "papier" 
? result.innerHTML= "komputer wygrywa!" : 

playerWeapon === "nożyce" && computerWeapon === "kamień" 
? result.innerHTML= "komputer wygrywa!" : 

result.innerHTML= "Wygrałeś!"
}

