// Asynchronous
console.log("one")
let a=()=>{
    console.log("hello")
};
setTimeout(a,0.5);
console.log("two")

// callback
function sum(a,b){
console.log(a+b);
}

function cal(a,b,callback){
    callback(a,b)
}

// cal(2,5,sum) pass function
cal(2,7,(a,b)=>{
    console.log(a+b); // define function
})

//calback hell

// function getData(get,getnext){
//    setTimeout(()=>{
//     console.log("data is:",get);
//     if (getnext){
//   getnext();
//     }
 
//    },1000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// })


// function getData1(get,getnext){
//    setTimeout(()=>{
//     console.log("data is:",get);
//     if (getnext){
//   getnext();
//     }
 
//    },1000);
// }
// getData1(1,()=>{
//     console.log("getting data 2...");
//     getData1(2,()=>{
//         console.log("getting data 3...");
//         getData1(3)
//     });
// })


//promises

// let newPr=new Promise((resolve,reject) =>{
//   console.log("this is first promise");
//   resolve(123);
 
// })
// let newPr1=new Promise((resolve,reject) =>{
//   console.log("this is second promise");
//   reject("error has occur");
// })


function getData3(get,getnext){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("data is:",get);
    resolve("success");
    if (getnext){
  getnext();
    }
 
   },5000);
    })
  
}

let final=getData3(123);