// functions 
let f=1;
function fic(x){
  for(let i=1;i<=x;i++){
    f=f*i;
  }
return f;
}
fic(5);
console.log(`fictorial of value:`,f)


function larg(x,y,z){
let largest=x;
if(largest<y){
  largest=y;
}
if(largest<z){
  largest=z;
}
console.log(largest)

}
larg(100,200,300);

let s=0;
function even(x){
   for(let i=0;i<=x;i++){
  if(i%2==0){
  s=s+i;
  }
   }
   console.log(s);
}
even(10);


function arr(x){
let sum=0;
for(let i=0;i<x.length;i++){
  sum=sum+x[i];
}
return sum;
}
let ar=[1,2,3,4,6]
let fin=arr(ar);
console.log(fin)


function sqr(x){
for(let i=1;i*i<=x;i++){
  if(i*i==x){
   return true;    
    
  }

}
return false;
}
let bol=sqr(40);
console.log(bol)

function greeting(x){
 let y="welcome" + x+"thanks to meet you";
}
greeting("zeeshan")
  