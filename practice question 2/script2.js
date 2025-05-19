
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("value is")
            resolve({id:1,name:"zeeshn",subject:"computer"});
    
        },2000)
      
    })
}

async function get(){
    await getUser().then((res)=>{
        console.log(res);
    });
    }
get();

function weather(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
   console.log("error or not")
            let whtr=Math.random()>0.5;
    whtr? resolve("wheater is good"):reject("eror has occured");
        },1000)
    })
}
async function get1(){
try{
    await weather().then((res)=>{
        console.log(res)
    })
}
  catch(err){
  console.log(err)
 }
   
    
}
get1();


function getUserNw(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    resolve({id:1,name:"ali",subject:"computer"});
        },1000)
    })
}
function getPost(getUser){
   return new Promise((resolve,reject)=>{
   
   setTimeout(()=>{
    resolve([  {id:1,title:"post1"},
        {id:2,title:"post2"}]
      
    ) 
    },1000)
   })
}

async function get2(){
   try{
    let user=await getUserNw();
    let post=await getPost(user.id);
   console.log( post[0].title);
   }
   catch(err){
    console.log("something wrong",err)
   }

} 
get2();


function products(){
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(["laptop","phone"])
  },1000)
    })
        
    
}
function categroies(){
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(["electronic","chemical"]);
  },1000)
    })
        
    
}

async function get3(){
  let promise1= products();
  let promise2=categroies();
 const arrList = await Promise.all([promise1, promise2]);
 let productsList=arrList[0];
 let categoriesList=arrList[1]
 let newArr=productsList.toString();
 console.log("products are:",newArr);
 let finArr=categoriesList.toString();
 console.log("categories are:",finArr)
 
  }
  get3();


  function getUserFin(user){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
  resolve(`user is ${user.name} `)
   },1000)
    })
  }
 
async function showUser(){
const newUser = { name: "Charlie" };
  const response = await getUserFin(newUser);  // Await the promise
  console.log(response);  
}
showUser();


function getUser1(){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
 resolve({id:1,name:"zeeshn"});

   },1000)
  })
}

function getPost1(userId){
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
resolve({id:1,title:"post1"});
 
    },1500)
    
  })
}

async function get4(){
  let lat=await getUser1();
  console.log(lat)
  let fin=await getPost1(lat.id);
 let lat1= fin.title;
 console.log(lat1)

}
get4();

function login(){
  return new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve({id:1,password:123})
},1000)
  })
}

function userInfo(userId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve({name:"zeeshan",depart:"copmuter",salary:2000})
    },1500)
  })
}

async function get5(){
  let nw=await login();
  console.log(nw);
  let fin=await  userInfo(nw.id);
  console.log(fin)
  console.log(`welcome ${fin.name}`)

}
get5();

function getCity(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("NewYork");
    },1000)
  })
}

function getWeather(){
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("sunny")
  },1500)
 })
}
function forecast(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
  resolve("no rain today")
    },2000)
  })
}

async function get6(){
  let first=await getCity();
  console.log(first);
  let second=await getWeather();
  console.log(second);
  let third=await forecast();
  console.log(third);
  console.log(`weather in ${first} is ${second} .forecast is ${third} `)
}
get6();


function loadUser(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({id:1,name:"bob"})
    },1000)
  })
}
function products1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(["cars","bikes","trains"])
    },1200)
  })
}

function success(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("order successful")
    },1500)
  })
}

async function final1(){
  let first1=await loadUser();
  console.log(first1);
  let second1=await products1();
  console.log(second1.toString());
  let third1=await success();
  console.log(third1);
  console.log(`${first1.name} your! order ${second1}  has ${third1} reached`);
}

final1();