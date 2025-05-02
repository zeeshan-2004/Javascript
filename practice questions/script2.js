let up=document.querySelector("p");
console.log(up.innertext="new data");
up.style.color="blue";

let ad=document.querySelector("ul")
let cr=document.createElement("p")
cr.innerText="this is new paragrph";
ad.append(cr);
let head=document.querySelector("h2")
head.remove();

let tog=document.querySelector(".togl");
tog.classList.toggle("newClass");

let atr=document.querySelector(".headi");
console.log(atr.getAttribute("class"));
atr.setAttribute("href","https://www.w3schools.com/js/js_htmldom_document.asp")

let hid=document.querySelector(".sub");
let cre=document.createElement("h1");
cre.innerText="new heading"
hid.parentNode.replaceChild(cre,hid)



let par=document.querySelector(".pa");
let newPr=document.createElement("p");
newPr.innerText="new para";
par.prepend(newPr);





