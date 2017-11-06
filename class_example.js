var Person = /** @class */ (function () {
    //Constructor of the object .
    function Person() {
        this.name = "PT";
        this.salary = 1200;
        this.saying = "I am from the constructor";
    }
    // method declaration
    Person.prototype.addNewSalary = function (salary) {
        console.log("New Salary " + (this.salary + salary) + " USD.");
    };
    Person.designation = "Software Engineer"; // static value
    return Person;
}());
//acessing static variable
console.log("Designation " + Person.designation);
// creating object
var employee = new Person();
// Accesing default values
console.log("Name " + employee.name);
console.log("Saying " + employee.saying);
// Accesing Method
employee.addNewSalary(100);
// Assinging new values
employee.name = "Piash Sarker";
employee.saying = "Work is worship";
//printing new values
console.log("Name " + employee.name);
console.log("Saying " + employee.saying);
