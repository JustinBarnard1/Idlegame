let weaponsElem = document.getElementById("weapon")
let playerElem = document.getElementById("player")
let helperElem = document.getElementById("helpers")

let money = 0

let player = [
    {
        name: prompt("Enter Your Character Name."),
        weapon: "fist",
        damage: 1,
    }
]

let weapons = [
    {
        name: "Wooden Pick",
        damage: 5,
        cost: 50,
        count: 0,
    },
    {
        name: "Broad Pick",
        damage: 15,
        cost: 250,
        count: 0,
    },
    {
        name: "Mithril Pick",
        damage: 25,
        cost: 500,
        count: 0,
    },
    {
        name: "Adamant Pick",
        damage: 40,
        cost: 1000,
        count: 0,
    },
    {
        name: "Rune Pick",
        damage: 60,
        cost: 10000,
        count: 0,
    },
    {
        name: "Magic Pick",
        damage: 85,
        cost: 100000,
        count: 0,
    },
    {
        name: "Ultimate Pick",
        damage: 100,
        cost: 1000000,
        count: 0,
    }
]
let helpers = [
    {
        name: "Goblin",
        damage: 50,
        cost: 500,
    }
]

function drawPlayer() {
    let template = `${player.name}`
    playerElem.innerHTML = template
}

function drawWeapons() {
    let template = ""
    weapons.forEach(weapon => {
        template += getWeaponTemplate(weapon)
    })
    weaponsElem.innerHTML = template
}

function getWeaponTemplate(weapon) {
    return `<button onclick="equipWeapon('${weapon.name}')">${weapon.name} ${weapon.damage} ${weapon.cost}</button>`
}

function drawHelper() {
    let template = ""
    helpers.forEach(helper => {
        template += getHelperTemplate(helper)
    })
}

let helperWhackIt = setInterval(helpers.damage, 2000)

function helperWhacksIt() {
    money += helpers.damage
    updateBoard()
}

function getHelperTemplate(helper) {
    return `<button onclick="addHelper('${helper.name}')">${helper.weapon} ${helper.cost}</button>`
}

function whackIt() {
    money += weapon.damage
}

function equipWeapon(weaponName) {
    let weapon = weapons.find(weapon => weapon.name == weaponName)
    if (weapon.cost > money) {
        return alert("You can't afford that.")
    }
    player.weapon = weapon
    updateBoard()
}

function drawMoney() {
    let template = `<span>Money: ${'money'}</span>`
}







function updateBoard() {
    drawWeapons()
    drawPlayer()
    drawHelper()
    drawMoney()
}

updateBoard()