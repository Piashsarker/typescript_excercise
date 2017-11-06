
class Person{
  name: string ;
  age :number ;
  address: string ;

  constructor(name:string , age:number , address:string){
    this.name = name ;
    this.age = age ;
    this.address = address ;

  }

  read(){
    console.log("Name: "+this.name+" Age: "+this.age+" Address: "+
    this.address+" is reading  now");
  }

}

class Student extends Person{

   read(){
     super.read();
     console.log("Student Reading ....");
   }

}



var   person = new Person("Sajib",21 , "Dhaka"); // creating object and passing value to the contructor
person.read();

var student = new Student("Piash ",22, "Dhaka");
student.read();
