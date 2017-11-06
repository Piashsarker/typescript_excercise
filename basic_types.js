// number type
var n = 1;
// n = "String Value"; // Will throw an error
//String type
var name1 = "Piash Sarker";
//name = 10 ; //willl throw an error
// boolean type
var isDone = true;
// isDone = 10 || "String Value " ; will throw an erro .
//array type
var names = ['Piash', 'Masud', 'Anjan'];
//any type
var anything = ['Piash ', 10, 'Masud', 20];
// enum type
var Company;
(function (Company) {
    Company[Company["Dcastalia"] = 0] = "Dcastalia";
    Company[Company["Google"] = 1] = "Google";
    Company[Company["Facebook"] = 2] = "Facebook";
})(Company || (Company = {}));
;
var dcastalia = Company.Dcastalia;
//function return type
function getName() {
    return "Piash Sarker";
}
// function void type
function showName() {
    console.log(getName());
}
showName();
console.log(n);
console.log(name1);
console.log(isDone);
console.log(names);
console.log(anything);
console.log(dcastalia);
