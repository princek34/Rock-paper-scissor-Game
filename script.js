let userScore=0;
let CompScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#Comp-score");
const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
   const randIdx=Math.floor( Math.random()*3);
   return options[randIdx];
};
function showCelebration() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
};

const drawGame=()=>{
console.log("Game was draw.");
msg.innerText="Game Draw! Play again";
msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    msg.classList.add("win-effect");
        setTimeout(()=> msg.classList.remove("win-effect"), 1000);
    showCelebration();
}else{
    CompScore++;
    compScorepara.innerText=CompScore;
    
    msg.innerText=`You Lose!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}
const playGame= (userChoice) =>{
console.log("userChoice = ",userChoice);
const compChoice=genCompChoice();
console.log("comp choice =",compChoice);
//generate computer choice
if(userChoice === compChoice){
drawGame();
}else{
    let userWin=true;
    if(userChoice === "rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice ="paper"){
        userWin=compChoice ==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice) =>{
    console.log(choices);
    choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    console.log("choices was clicked",userChoice);
    playGame(userChoice);
    });
});