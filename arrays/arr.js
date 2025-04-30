
// arrays 
let arr=[30,40,50,60];
console.log(arr);
console.log(arr.length);
let a=["ali","zeeshan","junaid","ahsan"];
console.log(a);
console.log(arr[0]);
arr[0]=50;
console.log(arr[0]);
console.log(arr);

// loops in arrays 

for(let i=0;i<arr.length;i++){
// console.log(arr[i]);
console.log(`$arr`);
}

// for-of loop
for(let x of a){
    console.log(x);
}
// quiz
let mar=[100,90,80,70,60]
let add=0;
let av;
for(let i=0;i<mar.length;i++){
     add=mar[i]+add;
     av=add/mar.length;
}
console.log(av);

let price=[200,300,400,500,600]
let y;

for(let i=0;i<price.length;i++){
    console.log(`price of item at index ${i} = ${price[i]}`)
     y=price[i] *10/100;
     price[i]=price[i]-y;
     console.log(`price of value after discount = ${price[i]}`)
}
console.log(price);

// mwthods of array
let food=["tommato","patato","banana","apple"];
console.log(food.length);
console.log(food);

food.push("stawberry","watemelon",);
console.log(food.length);
console.log(food);
food.pop();
console.log(food);
console.log(food.toString())
console.log(food);

let z=["fist","second"]
let concat=food.concat(z,a)
console.log(concat)

z.unshift("third")
console.log(z)
let del=z.shift();
console.log(del);

console.log(a.slice(0))


// quiz of methods

let company=["google","neflix","microsoft","uber","ibm"]
company.shift();
company.splice(2,1,"ola");
company.push("amazon");
console.log(company)
