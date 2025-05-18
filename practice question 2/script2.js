
// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          console.log("value is")
//             resolve({id:1,name:"zeeshn",subject:"computer"});
    
//         },2000)
      
//     })
// }

// async function get(){
//     await getUser().then((res)=>{
//         console.log(res);
//     });
//     }
// get();

// function weather(){
//     return new Promise( (resolve,reject)=>{
//         setTimeout(()=>{
//    console.log("error or not")
//             let whtr=Math.random()>0.5;
//     whtr? resolve("wheater is good"):reject("eror has occured");
//         },1000)
//     })
// }
// async function get1(){
// try{
//     await weather().then((res)=>{
//         console.log(res)
//     })
// }
//   catch(err){
//   console.log(err)
//  }
   
    
// }
// get1();


function getUser(){
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
    let user=await getUser();
    let post=await getPost(user.id);
   console.log( post[0].title);
   }
   catch(err){
    console.log("something wrong",err)
   }

} 
get2();