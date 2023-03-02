//identity healthbars
const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');

//identify play buttons
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
let hasStrongAttack = true;
let hasHeal = true;
const healBtn = document.getElementById('heal-btn');
const log = document.getElementById("log");
const playAgain = document.getElementById("playAgain");

//set values to life and damage
const maxPlayerLife = 100;
const maxMonsterLife = 100;
let monsterLife = maxMonsterLife;
let playerLife = maxPlayerLife;
const heal= 20; 
let monsterDamage;
let playerDamage;
let playerStrongDamage;

//add event listeners
attackBtn.addEventListener("click", attackMonster);
strongAttackBtn.addEventListener("click", strongAttackMonster);
healBtn.addEventListener("click", healPlayer);

//add normal attack function
function attackMonster() {
    playerDamage = parseInt(Math.random() * 10 + 2);
    monsterDamage = parseInt(Math.random()*11 + 4);
    monsterLife = monsterLife - playerDamage;
    playerLife -= monsterDamage;
    monsterHealthBar.value = monsterLife;
    playerHealthBar.value = playerLife;
    log.textContent = `You attacked with a damage of ${playerDamage}. Monster life: ${monsterLife}.
     The monster retaliated with a damage of ${monsterDamage}. Your life: ${playerLife}`;
     endGame();
}

//add strong attack function
function strongAttackMonster() {
        if(hasStrongAttack === true){
        playerStrongDamage = parseInt(Math.random() * 10 + 7);
        monsterDamage = parseInt(Math.random()*11 + 4);
        monsterLife = monsterLife - playerStrongDamage;
        playerLife -= monsterDamage;
        monsterHealthBar.value = monsterLife;
        playerHealthBar.value = playerLife;
        log.textContent = `You attacked with a damage of ${playerStrongDamage}. Monster life: ${monsterLife}.
        The monster retaliated with a damage of ${monsterDamage}. Your life: ${playerLife}. You can't use strong attack more than once.`;
        endGame(); 
}
        hasStrongAttack = false; 
        log.textContent = "You can use strong attack more than once."
}

//add heal function
function healPlayer() {
    if(hasHeal === true){
        if(playerLife <= 80 >0) {
        playerLife += 20;
        log.textContent = `You healed and now your life is ${playerLife}`;
        playerHealthBar.value = playerLife;
        } else {
        log.textContent = "You can't heal if your life is above 80";
        }
        hasHeal = false;
    } else {
        log.textContent = "You can't heal more than once."
    }
}

function endGame() {
    if(playerLife >= 0 && monsterLife <=0) {
        log.textContent = "You won!"
        reset();
    } else if(playerLife <=0 && monsterLife >=0) {
        log.textContent = " You lost!"
        reset();
    } else if(playerLife <= 0 && monsterLife <=0) {
        log.textContent = "It's a draw."
        reset();
    }
}

function reset() {
    playAgain.style.visibility = "visible";
    attackBtn.removeEventListener("click", attackMonster);
    strongAttackBtn.removeEventListener("click", strongAttackMonster);
    healBtn.removeEventListener("click", healPlayer);
}

