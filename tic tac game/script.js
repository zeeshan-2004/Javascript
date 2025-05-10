let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".btn");
let msg_con=document.querySelector(".mesg_container");
let msg=document.querySelector(".mesg");
let drw=document.querySelector(".dr");
let drw_con=document.querySelector(".draw");
let fianl_con=document.querySelector(".fin");


let turn=true; //playerx, playery
const draw=()=>{
{
 
drw.innerText="game is draw";
      drw_con.classList.remove("hidd");
      disableboxes();
    //   box.style.background="beige";
    //   box.innerText="";


  }
}

const winpatt=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click",(e)=>{
        if(turn){
            box.innerText="x";
            box.style.background="#5B7B7A";
            turn=false;
        }
        else{
            box.innerText="o";
            turn=true;
                box.style.background="#81966C"
        }
        box.disabled=true;
        checkWinner();
         count++;
    let iswinner=checkWinner();
     if(count===9 && !iswinner ){
   draw();
     }          
    });
    
         
    
});  
    
let disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const reset=()=>{
   for(let box of boxes){
  turn=true;
    count=0;
    enable();
     msg_con.classList.add("hide");
    drw_con.classList.add("hidd");
     box.style.background="beige";
   }
  

    }
 

  


 
const showWinner=(winner)=>{
msg.innerText=`congratulations you are winner ${winner}`
msg_con.classList.remove("hide");
disableboxes();



}
const checkWinner= ()=>{
  for(let pattern of winpatt){
//      console.log(pattern[0],pattern[1],pattern[2])
//   console.log(
//     boxes[pattern[0]].innerText,
//     boxes[pattern[1]].innerText,
//     boxes[pattern[2]].innerText);  access all indexes of boxes
   let pos1val=    boxes[pattern[0]].innerText;
    let pos2val=    boxes[pattern[1]].innerText;
    let pos3val=  boxes[pattern[2]].innerText;
  if(pos1val!="" && pos2val!= "" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){    
   console.log("winner is:",pos1val);
 showWinner(pos1val);
  return true;
    };
   
  }
  }

  
};



resetbtn.addEventListener("click",reset);
document.querySelectorAll(".newg").forEach(button => {
  button.addEventListener("click", reset);
});

