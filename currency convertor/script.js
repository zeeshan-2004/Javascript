const baseUrl = "https://api.exchangerate.host/convert";


const dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("form button");
let toCurr=document.querySelector(".to select")
let fromCurr=document.querySelector(".from select")

for(let select of dropdowns){
for(let currCode in countryList){
    // console.log(val,countryList[val]); // currency , country
    // console.log(select);
    let newOpt=document.createElement("option");
  newOpt.innerText=currCode;
  newOpt.value=currCode;
  if(select.name==="from" && currCode==="USD"){ // select usd
    newOpt.selected=true;
  }
  else
    if(select.name==="to" && currCode==="PKR"){ // select pkr
    newOpt.selected=true;
  }
  select.append(newOpt);


}
  select.addEventListener("change",(evt)=>{
   flagCh(evt.target);
  });
}

const flagCh=(elem)=>{
let currCode=elem.value;
let countryCode=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let im=elem.parentElement.querySelector("img"); // as imag is one step than selector up we acces image by acces parent 
im.src=newSrc;
}

btn.addEventListener("click",async(evnt)=>{
  evnt.preventDefault();
  let amount=document.querySelector(".amount input");
  let amntVal=amount.value;
  if(amntVal==="" || amntVal<1){
   amntVal=1;
    amount.value=1;
console.log(amntVal);
  }
//   const from = fromCurr.value.toLowerCase();
// const to = toCurr.value.toLowerCase();
const url = `${baseUrl}?from=${fromCurr.value}&to=${toCurr.value}`;

 //console.log(fromCurr.value,toCurr.value)
  // const url=`${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(url);
  console.log(response)
});