
interface Stark{
  name : string ;
  age? : number ; // As we put ? after varname ,  This parameter is not required
}

function printName(stark: Stark){
  console.log(stark.name);
}

printName({name:"Piash Sarker"});
// Will throw an error on runtime .
//printName({label: "Piash Sarker"});
