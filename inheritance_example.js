var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.read = function () {
        console.log("Name: " + this.name + " Age: " + this.age + " Address: " +
            this.address + " is reading  now");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.read = function () {
        _super.prototype.read.call(this);
        console.log("Student Reading ....");
    };
    return Student;
}(Person));
var person = new Person("Sajib", 21, "Dhaka"); // creating object and passing value to the contructor
person.read();
var student = new Student("Piash ", 22, "Dhaka");
student.read();
