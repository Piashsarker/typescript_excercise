
module MathModule{
   export class Math{
      add(n1:number , n2:number){
       return n1+n2 ;
     }

      sub( n1:number ,  n2:number){
       if(n1>n2){
         return n1-n2 ;
       }
       return n2-n1
     }
   }
}
