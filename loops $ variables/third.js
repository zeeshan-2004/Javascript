// for loop
for(let i=1;i<=5;i++){
    console.log("helloworld")
}
for(let i=1;i<=5;i++){
    console.log("value of i=",i)
}

let result=0;
for( let i=1;i<=5;i++){
    result=result+i;
   
}
console.log("result is=",result)
// while loop
let j=1;
while( j<=5){
console.log("hello world !");
j++;
}
// do while loop
let i=20;
do{
    console.log("this is pakistan")
}
while(i<=10);

// for-of loop
let x="pakistan";
for(let i of x){
    console.log(i)
}

// calculate size of string
let size=0;
for(var k of x){
    size++;
}
console.log(size)
 
// for-in

let student={ name:"zeeshan" ,rolno:242111 ,cgpa:3.7}
for(let y in student){
    console.log("key",y ,"value of key" ,student[y])
}

//qiuz 
for(let i=1;i<=10  ;i++){
    if(i%2==0)
        console.log(i)
}
for(let i=1;i<=10  ;i++){
    if(i%2!=0)
        console.log(i)
}
// comment out for prompt value

// let z=20;
// let y= prompt("enter a number");
// while(y!=z){
//    y= prompt("you guess wrong number"); 
// }
// console.log("you enterd correct number")

// string
 let name="zeeshan";
  console.log("length of string:",name.length);
  console.log("value of index",name[1])

  // template literal 
  let obj={name:"pen",cost:10 };
//   console.log("price of",obj.name,"is",obj.cost,"rupees")
console.log(`price of ${obj.name} is ${obj.cost} rupees`);
 console.log(`this is template literals ${1+2+3+4}`);

 // string methods
 let str="faisalabad";
 console.log(str.toUpperCase());

 let oldStr="hello world"
let newStr=oldStr.toUpperCase() ;
  console.log(newStr);

let st="SIALKOT";
console.log(st.toLowerCase());

let s="    a   b    c    ";
console.log(s);
console.log(s.trim())

let g="012345";
console.log(g.slice(1,4));

let fir="apna";
let sec="college";
let res=fir.concat(sec);
console.log(res)

let h="coding"+fir + sec;
console.log(h);

let var1="string" + 123;
console.log(var1);

let l="hello";
console.log(l.replace("h","y"));
let M="hello";
console.log(M.replaceAll("l","y"));

let n="string"
console.log(n.charAt(5));

let b="love";
b=b.replace("l","h")
console.log(b)


// quiz 
// comment out for prompt value
//  {
//  let a=prompt("enter your name");
//  let b=a;
//  let c="@";
//  let d=a.length;
//  let e=c+a+d;
//  console.log(e)
// }
// Example 1: trim specific characters (custom function)
let s1 = "   ***Python***   ";
let result1 = s1.trim().replace(/^\*+|\*+$/g, "");
console.log(result1); // Output: Python

// Example 2: split at first occurrence (similar to partition)
let s2 = "filename.extension.backup";
let index = s2.indexOf(".");
let result2 = [
  s2.slice(0, index),
  s2[index],
  s2.slice(index + 1)
];
console.log(result2); // Output: ['filename', '.', 'extension.backup']

// Example 3: replace characters using a map
let s3 = "abc123";
let map = { a: "1", b: "2", c: "3" };
let result3 = s3.replace(/[abc]/g, char => map[char]);
console.log(result3); // Output: 123123

// Example 4: check if string starts with a prefix
let s4 = "OpenAI";
let result4 = s4.startsWith("Open");
console.log(result4); // Output: true

// Example 5: check if all characters are uppercase
let s5 = "HELLO";
let result5 = s5 === s5.toUpperCase();
console.log(result5); // Output: true
