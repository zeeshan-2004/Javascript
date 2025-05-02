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

// quiz end


// dom
let quiz3=document.querySelector("#quiz");
console.log(quiz3)
let id=quiz3.getAttribute("id");
console.log(id)
let id1=quiz3.getAttribute("name");
console.log(id1);
let cl = document.querySelector(".box2");
console.log(cl.getAttribute("class")); 
console.log(cl.setAttribute("name","newname"));
cl.style.backgroundColor="red"  ;
cl.style.fontSize="26px"  ;
cl.innerText="hello";

// insert element
let newBtn=document.createElement("button");
newBtn.innerText="clickme"
console.dir(newBtn)
console.dir(newBtn.innerText)
let ape=document.querySelector(".add");
ape.append(newBtn);

let newPre=document.createElement("h1");
newPre.innerText="heading"
let pre=document.querySelector(".pre");
pre.prepend(newPre);

let newBef=document.createElement("h2");
newBef.innerText="sub heading"
let bef=document.querySelector(".box2");
bef.before(newBef);

let newAft=document.createElement("p");
newAft.innerText="this is para"
let aft=document.querySelector("#quiz");
aft.before(newAft);

//delete element
let del=document.querySelector(".del")
del.remove();

//quiz
  let newBut=document.createElement("button");
  newBut.innerText="click me";
  newBut.style.backgroundColor="red";
  newBut.style.color="white";
  let add1=document.querySelector("body");
  add1.prepend(newBut);

  let cs=document.querySelector(".para");
cs.classList.add("newClass");
  