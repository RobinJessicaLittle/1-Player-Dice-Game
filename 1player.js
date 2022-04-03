

const clickToRoll = document.getElementById("clickToRoll");
const dice = document.getElementById ("dice");
const clickToRestart = document.getElementById ("clickToRestart")
let winLose = document.getElementById("winLoose");
let score = document.getElementById("score");


let noScore = 0
let maxScore = 20

const gameresult=() => {
    clickToRoll.display="none"
    clickToRestart.style.display="block"
}

clickToRoll.addEventListener("click", () => {
    let roll = Math.ceil(Math.random() *6);
    dice.src = `images/${roll}.jpg`;
    noScore += roll;
    score.textContent = noScore;

    if(roll==1){ 
        winLose.textContent="You rolled 1, you loose!";
        noScore = 0
        gameresult()
        clickToRoll.textContent= "";
        clickToRestart.textContent= "Click to Re-Start";
    }else if(noScore>= maxScore){
        winLose.textContent="You scored 20, you win!";
        gameresult()
        noScore = 0
        clickToRoll.textContent= "";
        clickToRestart.textContent= "Click to Re-start";
    }
})


clickToRestart.addEventListener ("click", () =>{
    window.location.reload()
})
