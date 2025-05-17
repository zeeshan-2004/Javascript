// classes

class person{
    constructor(name,age){
   this.name=name; // just create properties not objects
   this.age=age
    }
    greet(){
        console.log(`my name is ${this.name}  and my age is ${this.age} `);
    }
}


class person1{
    constructor(name="zeeshnan",age=17){
   this.name=name;
   this.age=age;
    }
    greet(){
        console.log(`my name is ${this.name}  and my age is ${this.age} `);
    }
    
    isadult(){
    if(this.age>=18){
         let a="adult"
       console.log(a)
         return a;

    }
   
    }
     
    
}

let obj1=new person1();
obj1.isadult();
obj1.greet();

class student extends person1 {
  constructor(name,age,grade="A"){
    super(name,age); 
  this.grade=grade;
  }
  study(){
    console.log(`${this.name} is studying and age ${this.age} `);
  }
  greet(){
    console.log(`my name is ${this.name} and my age is ${this.age} and my garde is ${this.grade}`);
  }
}

let obj2=new student( );
obj2.study();
obj2.greet();


class teacher extends person1{
    constructor(subject,name,age){
      super(name,age);
 this.subject=subject;
    }
    teach(){
  console.log(`${this.name} teach ${this.subject}`)
    }
    greet(){
      super.greet();
      console.log("i teach",this.subject)
    }
  
  }
let teachObj=new teacher("english");
teachObj.teach();
teachObj.greet();




class person2{
  constructor(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
  }
  get(){
    console.log(`name is ${this.name} and age is ${this.age} and grade is ${this.grade}`)
  }
  set(newage){
    if(this.age<=0){
      this.age=newage;
    }
     else{
       this.age="invalid";
      console.log("invalid age")
    }
  }
  greet(){
    console.log(`age is ${this.age} of ${this.name}`)
  }
}

let perObj=new person2("zeeshan",0,"A");
perObj.get();
perObj.set(18);
perObj.greet();


//bank account system
 class bankAccount{
  constructor(accountNo,balance){
 this.accountNo=accountNo;
 this.balance=balance;
  }
deposit(amount){
  let depo=amount+this.balance;
  this.balance=depo
  console.log( this.balance);

}
withdraw(amountwidr){
 if(amountwidr<=this.balance)
 {
 let withdr=this.balance-amountwidr;
 console.log(withdr);
 }
 else{
  console.log("unsufficient amount");
 }
}
 }

 class savAcc extends bankAccount{
  constructor(accountNo,balance,rate){
    super(accountNo,balance);
   this.rate=rate;
  }
intRt(){
 let intrt=this.rate*this.balance;
 this.balance=this.balance+intrt;
 console.log(this.balance);
}
finalblnc(){
  console.log(this.balance);
}
 }

//  let savObj=new bankAccount();

let chObj=new savAcc(1122,10000,0.05);
chObj.deposit(1000);
chObj.withdraw(2000);
chObj.intRt();
chObj.finalblnc();



class animal{
  makesound(){
    console.log("some generic sound")
  }
}

class dog extends animal{
  book(){
    console.log("woof")
  }
}

let dogObj=new dog();
dogObj.makesound();
dogObj.book();

class personfin{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  intro(){
    console.log(`my name is ${this.name} and age is ${this.age}`)
  }
}

class studentfin extends personfin{
  constructor(name,age,grade){
    super(name,age);
    this.grade=grade
  }
  showdata(){
    console.log(`name is ${this.name} and age is ${this.age}  and grade is ${this.grade}`)
  }
   intro(){
    super.intro();
    console.log(`my name is ${this.name} and age is ${this.age} and grade is${this.grade}`)
  }
}
 
let finObj=new studentfin("ali",20,"A");
finObj.showdata();
finObj.intro();



// class user{
//   constructor(name,email){
//     this.name=name;
//     this.email=email;
//   }
//   login(){
//     console.log(`welcome ${this.name}`)
//   }
// }

// class instructor extends user{
//   constructor(name,email,courses[]){

//   }
// }