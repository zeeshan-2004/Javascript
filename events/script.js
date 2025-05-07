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
let key1=document.querySelector(".key");
document.addEventListener("keypress",(e)=>{
     console.log(e,e.key,e.keyCode);
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
form.addEventListener("submit",()=>{
    event.preventDefault();
    console.log("you submit form");
})
form.addEventListener("change",()=>{
    event.preventDefault();
    console.log("change th data")
})
form.addEventListener("input",()=>{
    event.preventDefault();
    console.log("input data",event.target.value)
})

form.addEventListener("reset",()=>{
    event.preventDefault();
    console.log("reset",);
    form.reset();
})
form.addEventListener("invalid",()=>{
    event.preventDefault();
    console.log("invalid",event.target)
},true);

let form1=document.querySelector(".ch");
form1.addEventListener("change",()=>{
    console.log("chnage value",event.target.value)
});
form1.addEventListener("focus",()=>{
    console.log("focus",)
});
form1.addEventListener("blur",()=>{
    console.log("blur")
});
// form1.addEventListener("reset",()=>{
//     console.log("reset")
// });

// bubbling
document.querySelector(".container").addEventListener("click",(e)=>{
    alert("this is container div")
})
document.querySelector(".child_container").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("this is child co div")
})
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("this is child")
})


        function getRandomColor() {
            let val1 = Math.ceil(0 + Math.random() * 255);
            let val2 = Math.ceil(0 + Math.random() * 255);
            let val3 = Math.ceil(0 + Math.random() * 255);
            return `rgb(${val1}, ${val2}, ${val3})`;}

 let a = setInterval(() => {
            document.querySelector(".child").style.background =getRandomColor();
        }, 1000);

        console.log(a);
 let b = setInterval(() => {
            document.querySelector(".child_container").style.background ="red";
        }, 1000);

        console.log(b);

 
 // delegation
        
        document.getElementById("list").addEventListener("click", function () {
            console.log("Clicked");
          });
          
          // window events
          window.addEventListener("load", () => {
            console.log("Page fully loaded with all content!");
          });
          document.addEventListener("DOMContentLoaded", () => {
            console.log("DOM fully loaded!");
          });
                   
          window.addEventListener("resize", () => {
            console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
          });
          window.addEventListener("scroll", () => {
            console.log("Page is scrolling...");
          });
          window.addEventListener("unload", () => {
            console.log("User is leaving the page...");
          });
          window.addEventListener("beforeunload", (e) => {
            e.preventDefault(); // Required for some browsers
            e.returnValue = ""; // Standard way to trigger a prompt
          });
                              