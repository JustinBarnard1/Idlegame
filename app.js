let weaponsElem = document.getElementById("weapon")
let playerElem = document.getElementById("thisPlayer")
let helperElem = document.getElementById("helpers")
let moneyElem = document.getElementById("money")
let nameElem = document.getElementById("chooseName").value
let mineElem = document.getElementById("mineImg")

let money = 500

let players = []


let weapons = [
    {
        name: "Hammer And Chisel",
        damage: 5,
        cost: 50,
        count: 0,
        img: "hammerchisel.png"
    },
    {
        name: "Pickaxe",
        damage: 15,
        cost: 250,
        count: 0,
        img: "pickaxe.png"
    },
    {
        name: "Bucket",
        damage: 25,
        cost: 500,
        count: 0,
        img: "bucket.png"
    },
    {
        name: "Cart",
        damage: 40,
        cost: 1000,
        count: 0,
        img: "cart.png"
    },
    {
        name: "Dynamite",
        damage: 60,
        cost: 10000,
        count: 0,
        img: "dynamite.png"
    }
]

let helpersDmg = 0

let helpers = [
    {
        name: "Goblin",
        damage: 50,
        cost: 500,
        count: 0,
        img: "goblin.png"
    },
    {
        name: "Human",
        damage: 75,
        cost: 1500,
        count: 0,
        img: "miner1.png"
    },
    {
        name: "Orc",
        damage: 125,
        cost: 2500,
        count: 0,
        img: "orc.png"
    },
    {
        name: "Dwarf",
        damage: 200,
        cost: 10000,
        count: 0,
        img: "dwarf.png"
    },
    {
        name: "Were-Worm",
        damage: 250,
        cost: 15000,
        count: 0,
        img: "wereWorm.png"
    }
]

function addPlayer(event) {
    event.preventDefault()
    let form = event.target
    let player =
    {
        name: form.name.value,
        weapon: "fist",
        damage: 1,
    }
    players.push(player)
    getStarted()
}

function drawMoney() {
    let template = `<span style="font-size: 28pt"><img class ="imgMoney" src="./money.png" alt="Money: "> ${money}</span>`
    moneyElem.innerHTML = template
}

function drawMine() {
    let template = `<img class="imgMain" onclick="whackIt()" src="./coalMine.png" alt="Mine">`
    mineElem.innerHTML = template
}

function drawPlayer() {
    let player = players[0].name
    let template = player
    playerElem.innerHTML = template
}

function drawWeapons() {
    let template = ""
    weapons.forEach(weapon => {
        template += getWeaponTemplate(weapon)
    })
    weaponsElem.innerHTML = template
}

function drawHelper() {
    let template = ""
    helpers.forEach(helper => {
        template += getHelperTemplate(helper)
    })
    helperElem.innerHTML = template
}

function getWeaponTemplate(weapon) {
    return `<button onclick="equipWeapon('${weapon.name}')">${weapon.name} ${weapon.damage} ${weapon.cost} ${weapon.count}</button>`
}

function getStarted() {
    document.getElementById('welcome').remove()
    setInterval(helperWhacksIt, 3000)
    helperWhacksIt()
}

function helperWhacksIt() {
    money += helpersDmg
    updateBoard()
}

function getHelperTemplate(helper) {
    return `<button onclick="equipHelper('${helper.name}')">${helper.name} ${helper.damage} ${helper.cost} ${helper.count}</button>`
}

function whackIt() {
    money += players[0].damage
    //console.log(money)
    updateBoard()
}

function equipHelper(helperName) {
    let helper = helpers.find(helper => helper.name == helperName)
    if (helper.cost > money) {
        return alert("You can't afford that.")
    }
    money -= helper.cost
    helper.cost += Math.round(helper.cost * 0.2)
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
    weapon.cost += Math.round(weapon.cost * 0.2)
    weapon.count += 1
    player.damage += weapon.damage
    updateBoard()
}

function updateBoard() {
    drawWeapons()
    drawPlayer()
    drawHelper()
    drawMoney()
    drawMine()
}



//updateBoard()