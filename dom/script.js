console.log("hello")
window.console.log("hello pakistan")
console.log(window)
console.log(window.document)
console.dir(window.document)
console.dir(window.document.body)
console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1]);
console.dir(document.body.style.background="lightgrey");
document.body.childNodes[1].innerText="this is chnage";
// console.dir(document.body); 
let heading=document.getElementById("second");
console.dir(heading);
let heading1=document.getElementsByClassName("box");
console.dir(heading1);
let para=document.getElementsByTagName("h3");
console.dir(para);
let query=document.querySelector("p")
console.dir(query)
let queryAl=document.querySelectorAll("p")
console.dir(queryAl)
let queryA1=document.querySelector(".box")
console.dir(queryA1)
console.log(queryA1.tagName);
let queryA2=document.querySelectorAll(".box")
console.dir(queryA2)
queryA1.innerText="new value"
console.log(queryA1.innerText);
let queryA3=document.querySelector("#first")
console.dir(queryA3)
let queryA4=document.querySelectorAll("#second")
console.dir(queryA4) 
let child=document.querySelector("div")
console.log(child)
let queryA5=document.querySelector("div")
console.dir(queryA5)
console.log(queryA5.innerHTML)
let queryA6=document.querySelector(".hid");
console.dir(queryA6);
console.log(queryA6.innerText);
console.log(queryA6.textContent);

// qiuz
let quiz1=document.querySelector("#quiz");
console.dir(quiz1);
quiz1.innerText=quiz1.innerText+" from apna college";

let quiz2=document.querySelectorAll(".box1");
quiz2[0].innerText=" new change 1";
quiz2[1].innerText=" new change 2";
quiz2[2].innerText=" new change 3";



// quiz2.innerText=quiz2.innerText+" and also has on top"