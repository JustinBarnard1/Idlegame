let weaponsElem = document.getElementById("weapon")
let playerElem = document.getElementById("thisPlayer")
let helperElem = document.getElementById("helpers")
let moneyElem = document.getElementById("money")
let nameElem = document.getElementById("chooseName").value
let mineElem = document.getElementById("mineImg")

let money = 0

let players = []


let weapons = [
    {
        name: "Chisel",
        damage: 3,
        cost: 100,
        count: 0,
        img: "chisel.png"
    },
    {
        name: "Pickaxe",
        damage: 10,
        cost: 1000,
        count: 0,
        img: "pickaxe.png"
    },
    {
        name: "Bucket",
        damage: 20,
        cost: 5000,
        count: 0,
        img: "bucket.png"
    },
    {
        name: "Cart",
        damage: 35,
        cost: 25000,
        count: 0,
        img: "cart.png"
    }
]

let helpersDmg = 0

let helpers = [
    {
        name: "Human",
        damage: 75,
        cost: 3000,
        count: 0,
        img: "miner1.png"
    },
    {
        name: "Orc",
        damage: 125,
        cost: 15000,
        count: 0,
        img: "orc.png"
    },
    {
        name: "Dwarf",
        damage: 200,
        cost: 40000,
        count: 0,
        img: "dwarf.png"
    },
    {
        name: "Were-Worm",
        damage: 250,
        cost: 80000,
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
    return `<div class="col-6 mb-3 card bg-light cardWidth text-center" style = "width: 18rem;" >
        <img src="${weapon.img}" class="imgCards mx-auto" alt="'${weapon.name}'">
            <div class="card-body">
                <span class="card-title">'${weapon.name}'</span>
                <p class="card-text">Damage: ${weapon.damage}</p>
                <p class="card-text">Count: ${weapon.count}</p>
                <a href="#" class="btn btn-primary" onclick="equipWeapon('${weapon.name}')">Buy: $${weapon.cost}</a>
            </div>
</div>`
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
    return `<div class="col-6 mb-3 card bg-light cardWidth text-center" style = "width: 18rem;" >
        <img src="${helper.img}" class="imgCards mx-auto" alt="'${helper.name}'">
            <div class="card-body">
                <span class="card-title">'${helper.name}'</span>
                <p class="card-text">Damage: ${helper.damage}</p>
                <p class="card-text">Count: ${helper.count}</p>
                <a href="#" class="btn btn-primary" onclick="equipHelper('${helper.name}')">Buy: $${helper.cost}</a>
            </div>
</div>`
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
    players[0].damage += weapon.damage
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