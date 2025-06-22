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
    console.log(data.url);// print proerty of object
    getPara.innerText=data.url;
   
}

btn.addEventListener("click",getFacts);

// using promise chain

function obj(){
    fetch(url)
    .then((response)=>{
 return    response.json();
    }).then((data)=>{
      console.log(data.id)
    });

}
obj();

// practice questions


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then(data => {
    console.log('Post data:', data);
  })
  .catch(error => {
    console.error('Error fetching post:', error);
  });


   

fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Fetch failed:', error.message);
  });

  // post

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     title: 'My Custom Post Title',
    body: 'This is the body content of the post.',
    userId: 101
  })
})
.then(response=>response.json())
.then(data=>{console.log(data)})
.catch(reject=>{
 console.log(reject)
})
 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(user=>{
  user.forEach(user=>{
console.log("username:",user)
  })
 
})
.catch(reject=>{
  console.log(reject)
}

)

//using async await

let as1=async()=>{
try{
 let aw1=await fetch("https://jsonplaceholder.typicode.com/todos/1");
let a=await aw1.json();
console.log(a);
}

catch(error){
console.log(error)
};
}
as1();