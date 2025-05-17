// memeber functions in object
const obj={
    name:"zeeshan",
    class:"computer",
    marks:3.7,
    printMarks:function(){
        console.log("marks is=", this.marks)
    },

  printClass(){
    console.log("class is=",this.class);
  }
};
console.log(obj.printClass());

// prototype

const percentg={
    per(){
        console.log("find percentage") // prototype function
    }
}

obj.__proto__= percentg;
obj.per();

// 1
const newObj={
    salry:25000,
    per(){
        console.log("personal percentage") 
    }
}
newObj.__proto__= percentg;
newObj.per();

 //class
 class cars{
//    constructor(){
//     console.log("this is constructor")
//    }
   constructor(brand,price){
   console.log("creating new object")
    this.brandName=brand;
    this.price=price;
    console.log(this.brandName,this.price);
   }
    start(){
        console.log("start")
    }

    stop(){
         console.log("stop")
    }
    brand(br){
  this.brandName=br
    }
 }

 // creating object
 let obj1=new cars();
 console.log(obj1);
 obj1.start();
 obj1.stop();

  let obj2=new cars();
  let obj3=new cars("new brand",2000);
  console.log(obj3)

  obj2.start();

// inheritance
class parent{
    hello(){
        console.log("hello world")
    }
}

class child extends parent{}
let objIn=new child;
console.log(objIn);
objIn.hello(); // inheritance function


class person{
    constructor(name){
        console.log("parent constructor");
        this.spe="special";
        this.name=name;

    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("work for person")
    }
}

class engineer extends person{
    constructor(branch,name){
        console.log("enter child constructor");
        super(name); // invoke parent constructor
  this.branch=branch;
  console.log("exit child constructor")
    }
    skill(){
        console.log("problem solving");
    }
  
        work() // over riding
        {
            super.eat();
            console.log("engineer work ");
        }
    
    }

let engObj=new engineer();
let personObj=new person();
console.log(personObj);
console.log(engObj);
engObj.skill();
engObj.eat();
engObj.work();
let engObj2=new engineer("new parameter","zeeshan");
console.log(engObj2)

// quiz

let data="some informatoon"
class student{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",data);
    }
}
let stuObj=new student("zeeshan","fareedzeeshan@gmail.com");
console.log(stuObj)
let  stuObj1=new student ("ahamd","ahamad@gmail.com")
console.log(stuObj1)


class user{
    constructor(name,email){
  this.name=name;
  this.email=email;
    }
    data(){
        console.log(data)
    }
}

class admin extends user{
    constructor(name,email){
  super(name,email);
  this.name=name;  // creating child properties
  this.email=email;
    }
    editData(){
        super.data();
        data="some new value"
    }
}

let userObj=new user("ali","ali@gmail.com");
console.log(userObj);

let adminObj=new  admin("junaid","junaid@gmail.com");
console.log(adminObj)

