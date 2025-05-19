const url="https://api.thecatapi.com/v1/images/0XYvRd7oD";
// let promise=fetch(url); // request send
// console.log(promise) // will give response after some time
let getPara=document.querySelector(".get")
let btn=document.querySelector(".btn")

const getFacts=async ()=>{  // async function
    console.log("getting data ..");
    let response=await fetch(url); // may take some time
    console.log(response) // in jason format
    console.log(response.status)
    let data= await response.json(); // convert json into js obj
    console.log(data);
    console.log(data.id);// print proerty of object
    getPara.innerText=data.id;
   
}

btn.addEventListener("click",getFacts);