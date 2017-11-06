class Person{
  name : string = "PT";
  saying: string ;
  static designation : string = "Software Engineer"; // static value
  salary : number = 1200;
  //Constructor of the object .
  constructor(){
    this.saying = "I am from the constructor";
  }

// method declaration
 addNewSalary(salary:number){
   console.log("New Salary "+(this.salary+salary)+" USD.");
 }

}





//acessing static variable
console.log("Designation "+Person.designation);

// creating object
var employee = new Person();

// Accesing default values
console.log("Name "+employee.name);
console.log("Saying "+employee.saying);
// Accesing Method

employee.addNewSalary(100);


// Assinging new values
employee.name = "Piash Sarker";
employee.saying = "Work is worship";

//printing new values
console.log("Name " + employee.name);
console.log("Saying "+employee.saying);
