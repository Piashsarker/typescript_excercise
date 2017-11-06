
// number type
var n : number =1;
// n = "String Value"; // Will throw an error

//String type
var name1 : String = "Piash Sarker";

//name = 10 ; //willl throw an error
// boolean type
var isDone: boolean = true ;

// isDone = 10 || "String Value " ; will throw an erro .

//array type
var names : string [] = ['Piash','Masud','Anjan'];

//any type
var anything : any[] = ['Piash ',10,'Masud',20];

// enum type

enum Company {Dcastalia, Google , Facebook};

var dcastalia : Company = Company.Dcastalia ;

//function return type

function getName(): string{
  return "Piash Sarker";
}
// function void type
function showName():void{
  console.log(getName());
}

showName(); 


console.log(n);
console.log(name1);
console.log( isDone);
console.log(names);
console.log(anything);
console.log(dcastalia);
