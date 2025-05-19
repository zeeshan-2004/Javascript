//Asynchronous
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

cal(2,5,sum) //pass function
cal(2,7,(a,b)=>{
    console.log(a+b); // define function
})

//calback hell

function getData(get,getnext){
   setTimeout(()=>{
    console.log("data is:",get);
    if (getnext){
  getnext();
    }
 
   },1000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    });
})


function getData1(get,getnext){
   setTimeout(()=>{
    console.log("data is:",get);
    if (getnext){
  getnext();
    }
 
   },1000);
}
getData1(1,()=>{
    console.log("getting data 2...");
    getData1(2,()=>{
        console.log("getting data 3...");
        getData1(3)
    });
})


//promises

//create promises
let newPr=new Promise((resolve,reject) =>{
  console.log("this is first promise");
  resolve("success");


})

let newPr1=new Promise((resolve,reject) =>{
  console.log("this is second promise");
  reject("error has occur");
})


function getData3(get,getnext){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("data is:",get);
    resolve("success");
    // reject("error has soccur")  // for error when reject
    if (getnext){
  getnext();
    }
 
   },3000);
    })
  
}
let final=getData3(123);


//uses of promises
let getPro=()=>{
   return new Promise( (resolve,reject)=>{
 console.log("i am new promise");
 resolve("success");
//  reject("error has occured");  // for error 
    })
}
    let promise=getPro(); // callback
    promise.then( (result)=>{
        console.log("promise has fullfilled",result);
    })

let promise1=getPro();
promise1.catch( (error)=>{
    console.log("promise has reject",error)
})


//promise chain

function Asyn1(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
   console.log("data 1");
   resolve("promise has resolve");
     },4000)
    })
}
function Asyn2(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
   console.log("data 2");
   resolve("promise has resolve");
     },4000)
    })
}

console.log("getting data1...")
let p1=Asyn1();
p1.then( (res)=>{
  console.log(res);         //for getting concept first
console.log("getting data2...");
let p2=Asyn2();
 p2.then((res)=>{
  console.log(res)
})
})
// simplest form of above function
console.log("getting data1...");
Asyn1().then( (res)=>{
  console.log(res);
console.log("getting data2...");
Asyn2().then((res)=>{
  console.log(res)
})
})


// real promise chain

function getData1(get){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("get data is",get)
        resolve("success"); 
 
   },1000);
  })

}


console.log("getting data 1...")
getData1(1).then((res)=>{
console.log("getting data 2...")
   return getData1(2);
}).then((res)=>{
    console.log("getting data 3...")
    return getData1(3);
}).then((res)=>{
    console.log(res);
})

//async function
async function hello(){
 console.log("heloo")
}
hello();

function api(){
    return  new Promise((resolve,reject)=>{
  setTimeout(()=>{

 console.log("weather");
 resolve(200) // success message in apis
    },3000)
    })
  
}

async function weat(){
await api(); //1st call
await api(); // 2nd call after 1st complete
}

weat();

function getData1(get){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("get data is",get)
        resolve("success"); 
 
   },1000);
  })

}

async function get(){
    console.log("getting value 1...");
    await getData1(1);
     console.log("getting value 2...");
    await getData1(2);
     console.log("getting value 3...");
    await getData1(3);

}
get();