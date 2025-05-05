console.log("hello");
let ac=document.querySelector(".btn");
ac.onclick=(e)=>{
   console.log(e);
   console.log(e.type);

    let a=26;
    a++;
    console.log(a);
}
let ac1=document.querySelector(".d");
ac1.onmouseover=(e)=>{
    console.log("mouseover");
    console.log(e);
}


//event listern
let ac2=document.querySelector(".btn1");
ac2.addEventListener("click",(e)=>{
    console.log("buuton was clicked");
    console.log("this is object")
})

ac2.addEventListener("click",(e)=>{
    console.log("handler 2");
    console.log("this is object")
})

let nwfn=(e)=>{
    console.log("handler 3");
    console.log("this is object")
}

ac2.addEventListener("click",nwfn);
ac2.removeEventListener("click",nwfn);

//quiz
let togl=document.querySelector(".tog")
let mode="dark";
togl.addEventListener("click",()=>{
    if(mode=="dark"){
        mode="light";
    }
    else{
        mode="dark";
    }
    console.log(mode);
}
)

// 2nd way

// let modeBtn = document.querySelector(".tog");
// let currMode = "dark";
// let body = document.querySelector("body");

// function change() {
//     if (currMode === "light") {
//         currMode = "dark";
       
//     }
//     else {
//         currMode = "light";
      
//     }
//     console.log(currMode);
// }

// modeBtn.addEventListener("click", change);



