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


// child nodes
let ch=document.querySelector(".d");
console.log(ch.children);
console.log(ch.childNodes);
console.log(ch.firstChild);
console.log(ch.firstElementChild);
console.log(ch.lastChild);
console.log(ch.lastElementChild);
let chng=document.querySelector(".d").children[1];
chng.innerText="this is nw heading"
console.log(chng);

// }
let items = document.querySelectorAll(".d");
for (let item of items) {
  for(let ch of item.children)
  ch.classList.add("highlight");
}
let cr1=document.querySelector("h2");
cr1.innerText="append heading";
let nw=document.querySelector(".d");
nw.appendChild(cr1);

let ac=document.querySelectorAll(".app");
for(let old of ac){
  for(let nw of old.children){
    nw.style.color="red";
  }
}

let cn=document.querySelectorAll(".fr");
let cnt=document.querySelector(".count");
cnt.textContent=cn.length;
console.log(cnt);

let next=document.querySelectorAll(".count1")
for(let i=0;i<next.length;i++){
  next[i].innerText="update";
}

let elements = document.querySelectorAll("section *");
elements.forEach(el => {
  console.log(el.id);
});

let p = document.querySelector(".fir");
let strong = document.createElement("strong");
strong.textContent = p.textContent;
p.textContent = "";           // clear original
p.appendChild(strong);        // insert new



// events 
let bc=document.querySelector(".ms");
bc.addEventListener("click",()=>{
document.body.style.backgroundColor="red";
})

let text=document.querySelector(".text")
text.addEventListener("keydown",()=>{
 console.log(event.target.value)
})

let frm=document.querySelector(".frm");
frm.addEventListener("submit",()=>{
  event.preventDefault();
  let inp=document.querySelector(".next").value;
  alert(inp);
})

let im=document.querySelector(".img");
im.addEventListener("dblclick",()=>{
  im.style.visibility="hidden";
})

let pa=document.querySelector(".para");
pa.addEventListener("mouseover",()=>{
  pa.innerText="after changing";
  
})
pa.addEventListener("mouseleave",()=>{
  pa.innerText=" ";

})

let btn=document.querySelector(".btn");
let mode="dark";
btn.addEventListener("click",()=>{
  
  document.body.classList.toggle("dark")
    
})

let coar=document.querySelector(".box");
coar.addEventListener("mouseover",()=>{
  let x=event.offsetX;
  let y=event.offsetY;
  console.log(`"x coardinate" ${x} "y coardinate ${y}`)
})
coar.addEventListener("mouseleave",()=>{
  coar.innerText="";
});

let inp=document.querySelector(".inp");
let acs=document.querySelector(".pa");
inp.addEventListener("keypress",()=>{
  if(event.key=="Enter"){
    pa.tabindex=1;
    console.log(event.target.value);
    
  }
}
)

let inpu=document.querySelector(".box");
// inpu.addEventListener("keypress",()=>{
  
//   console.log( event.target.value)
// })
inpu.addEventListener("keypress",()=>{
  
  console.log( event.key);
})

let frm1=document.querySelector(".frm1")
frm1.addEventListener("submit",()=>{
  event.preventDefault();
  let nw=document.querySelector(".p1")
  nw.addEventListener("keypress",()=>{
    if(event.key==submit){
      nw.tabindex=1;
      nw.innerText="thankyou"
      console.log(nw)
     }
  })
 

})