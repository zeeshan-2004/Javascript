let userScore=0;
let compScore=0;
let mesg=document.querySelector(".mesg");

let userScorefnl=document.querySelector("#user-score")

let compScorefnl=document.querySelector("#comp-score")

const genComChoice=()=>{
    const arr=["rock","paper","scissors"];
    const ranInd=Math.floor(Math.random()*3); //random generating 0 ,1 or 2 whole number
    return arr[ranInd] /*Returns the element from the arr array at index ranInd:
    If ranInd is 0, it returns "rock".If 1, it returns "paper" .If 2, it returns "scissor"*/
}

const drawGame=()=>{
    mesg.innerText="Game was Draw. Play Again.";
    mesg.style.background="#353839";
}

const userWinner=(userWin,compChoice,userChoice)=>{
  if(userWin===true){
   userScore++;
    userScorefnl.innerText= userScore;
    mesg.innerText=`Congrats You Win .Your ${userChoice} beats ${compChoice }`;
    mesg.style.background="green";
  }
  else{
    compScore++;
    compScorefnl.innerText= compScore;
    mesg.innerText=` You lose . ${compChoice} beats Your ${userChoice }`;
    mesg.style.background="red";
  }
}


const playGame=(userChoice)=>{
console.log("userchoice=",userChoice);
// gen comp choice
const compChoice=genComChoice();
console.log("computer choice=", compChoice);
if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
  // comp choose scissor or paper while draw for same
     userWin= compChoice==="paper"? false:true;
    }
    else 
    if(userChoice==="paper"){
        // comp choose scissor or rock while draw for same
        userWin= compChoice==="scissors"?false:true;
    }
    else
  {
        //  if(userChoice==="scissor") and comp choose paper or rock while draw for same
        userWin= compChoice==="rock"? false:true;
    }
    userWinner(userWin,compChoice,userChoice);
}
}


let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was click",userChoice);
        playGame(userChoice)
    })
})