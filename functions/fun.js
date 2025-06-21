function myFirst(){
    console.log("this is my first function");
    console.log("this is javascript");
}
myFirst();
function mess(msg,n){
    console.log(msg);
    console.log(n)
}
mess("this is my message",50);

function sum(a,b){
console.log(a+b)
}
sum(20,30);


function sum(a,b){
let d=a+b;
return d;
}
sum(100,130);
let c=sum();
console.log(c)

// arrow function
const arrow=(a,b)=>{
    console.log(a+b);
}
arrow(3,5)

const mul=(b,c)=>{
    console.log(b*c)
}
mul(4,5)

const hello=() =>{
    console.log("hello")
}
hello();

// quiz 
let d=0;
function vow(a){
  for(let i=0;i<a.length;i++) {
    if(a[i]==="a"|| a[i] === "e"|| a[i]=== "i"|| a[i]==="o"|| a[i]==="u"){
        d++;
  } 
    
    }
    console.log(d) ;
}
vow("helloworldaa");

// using for-of loop

function vow(a){
    count=0;
  for(let char of a) {
    if(char==="a"|| char === "e"|| char=== "i"|| char==="o"|| char==="u"){
        count++;
  } 
    
    }
    console.log(count) ;
}
vow("helloworld");

// using arrow function
let fun=(a)=>{
    count=0;
    for(let char of a) {
      if(char==="a"|| char === "e"|| char=== "i"|| char==="o"|| char==="u"){
          count++;
    } 
      
      }
      console.log(count) ;
}
fun("apnacollegeaa")


// forEach loop in array 
let arr=[20,30,40];
arr.forEach(function printValue(val){
 console.log(val)
}
)
 // using arrow 
 let arrsec=[ 10, 20, 30];
 arrsec.forEach((val)=>{
 console.log(val)
 } );

 arr.forEach( function printval(val,ind,arr) {
 console.log(val,ind,arr)} ) 
 
 // quiz
 let qarr=[2,3,4]
 qarr.forEach((val)=>{
    console.log(val*val);
 }
)

// map
let newar=[1,2,3,4]
let lastar=newar.map((val)=>{
console.log(val);
return val;
});
console.log(lastar)

// filter
let evarr=newar.filter((val)=>{
 return val%2===0
}
 )
 console.log(evarr)


 // reduce
 let  redarr=[1,2,3,4]
let nearr=redarr.reduce( (result,current)=>{
return result+current ;
} );
console.log(nearr)

 let  reduarr=[1,2,3,4]
let near=reduarr.reduce( (result,current)=>{
return result>current?result:current;
} );
console.log(near)
// quiz
let marks=[90,92,58,60,99]
let finar=marks.filter( (val)=>{
 return val>90;
})
 console.log(finar)

 let h= prompt("enter a number"); //because promy but part of program
 let lastarr=[];

 for(let i=1;i<=h;i++){
    lastarr[i]=i;
    
 };
 console.log(lastarr);

let latarr=lastarr.reduce( ( result,current)=>{
    return result+current;
   
});
console.log(latarr)

let multiple=lastarr.reduce((result,current)=>{
   return result*current;
});
console.log(multiple)


