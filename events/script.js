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


// common mouse events

let ev=document.querySelector(".evnt");
ev.addEventListener("mousedown",()=>{
    console.log("mousedown");
})
ev.addEventListener("mouseup",()=>{
    console.log("mouseup");
})
ev.addEventListener("mousemove",()=>{
    console.log("mousemove");
})
ev.addEventListener("mouseenter",()=>{
    console.log("mouseenter");
})
ev.addEventListener("mouseleave",()=>{
    console.log("mouseleave");
})
ev.addEventListener("mouseover",()=>{
    console.log("mouseover");
})
ev.addEventListener("mouseout",()=>{
    console.log("mouseout");
})
ev.addEventListener("contextmenu",()=>{
    console.log("contextmenu");
})


// keyborad events
let key1=document.querySelector(".keyb");
key1.addEventListener("keypress",()=>{
     console.log("kyepress");
})
let key2=document.querySelector(".tab");
key2.addEventListener("keydown",(e)=>{
    console.log("tab key down",e.key);
}) 
key2.addEventListener("keyup",(e)=>{
    console.log("release key",e.key);
}) 

// form events
let form=document.querySelector("form");
// form.addEventListener("submit",()=>{
//     event.preventDefault();
//     console.log("you submit form")
// })
// form.addEventListener("change",()=>{
//     event.preventDefault();
//     console.log("you submit form")
// })
// form.addEventListener("input",()=>{
//     event.preventDefault();
//     console.log("changed value",event.target.value)
// })

form.addEventListener("reset",()=>{
    event.preventDefault();
    console.log("reset",)
})
form.addEventListener("invalid",()=>{
    event.preventDefault();
    console.log("invalid",event.target)
},true);


let form1=document.querySelector(".ch");
// form1.addEventListener("change",()=>{
//     console.log("chnage value",event.target.value)
// });
// form1.addEventListener("focus",()=>{
//     console.log("focus",)
// });
// form1.addEventListener("blur",()=>{
//     console.log("blur")
// });
form1.addEventListener("reset",()=>{
    console.log("reset")
});

