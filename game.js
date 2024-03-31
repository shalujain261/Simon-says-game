let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btnColor = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }

});



function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 500);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 500);

}

function levelUp(){
    userSeq = [];
    level++;
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btnColor[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor)
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("Curr. level ",level);
  
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText = "Game over! Press any to start";
        reset();
    }
}


function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);
     checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}


