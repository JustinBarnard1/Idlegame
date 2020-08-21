let weaponsElem = document.getElementById("weapon")
let playerElem = document.getElementById("player")
let helperElem = document.getElementById("helpers")
let moneyElem = document.getElementById("money")

let money = 500

let player =
{
    name: prompt("Enter Your Character Name."),
    weapon: "fist",
    damage: 1,
}


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

let helpersDmg = 0

let helpers = [
    {
        name: "Goblin",
        damage: 50,
        cost: 500,
        count: 0,
    },
    {
        name: "Halfling",
        damage: 75,
        cost: 1500,
        count: 0,
    },
    {
        name: "Centaur",
        damage: 125,
        cost: 2500,
        count: 0,
    },
    {
        name: "Troll",
        damage: 200,
        cost: 10000,
        count: 0,
    },
    {
        name: "Minotaur",
        damage: 250,
        cost: 15000,
        count: 0,
    },
    {
        name: "Giant",
        damage: 350,
        cost: 25000,
        count: 0,
    },
    {
        name: "Dragon",
        damage: 500,
        cost: 50000,
        count: 0,
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
    return `<button onclick="equipWeapon('${weapon.name}')">${weapon.name} ${weapon.damage} ${weapon.cost} ${weapon.count}</button>`
}

function drawHelper() {
    let template = ""
    helpers.forEach(helper => {
        template += getHelperTemplate(helper)
    })
    helperElem.innerHTML = template
}

let helperWhackIt = setInterval(helperWhacksIt, 3000)

function helperWhacksIt() {
    money += helpersDmg
    updateBoard()
}

function getHelperTemplate(helper) {
    return `<button onclick="equipHelper('${helper.name}')">${helper.name} ${helper.damage} ${helper.cost} ${helper.count}</button>`
}

function whackIt() {
    money += player.damage
    //console.log(money)
    updateBoard()
}

function equipHelper(helperName) {
    let helper = helpers.find(helper => helper.name == helperName)
    if (helper.cost > money) {
        return alert("You can't afford that.")
    }
    money -= helper.cost
    helper.count += 1
    helpersDmg += helper.damage
    updateBoard()
}

function equipWeapon(weaponName) {
    let weapon = weapons.find(weapon => weapon.name == weaponName)
    if (weapon.cost > money) {
        return alert("You can't afford that.")
    }
    money -= weapon.cost
    weapon.count += 1
    player.damage += weapon.damage
    updateBoard()
}

function drawMoney() {
    let template = `<span style="font-size: 28pt">Money: ${money}</span>`
    moneyElem.innerHTML = template
}







function updateBoard() {
    drawWeapons()
    drawPlayer()
    drawHelper()
    drawMoney()
}

helperWhacksIt()
//updateBoard()