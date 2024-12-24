let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","blue","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// game started by clicking any key on keyboard
document.addEventListener("keypress", function(){
    // console.log("game started");
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    };
});

// level up and button flashes
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${randColor}`);
    // random btn choose
    // console.log(ranIdx);
    // console.log(ranBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(ranBtn);
}

// Adding event listener over buttons
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

// Matching Sequence
function checkAns(idx){
    // console.log("curr level : ",level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000); 
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
};

// Reset Game
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}