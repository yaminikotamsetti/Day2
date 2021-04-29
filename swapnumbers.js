console.log("Swapping of two numbers ......");
console.log("Pass by value");



    function Passbyvalue(a, b) 
{
    var temp;
    temp = b;
    b = a;
    a = temp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
var a = 10;
var b = 20;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
console.log(`After calling Pass by value 
        Function -> a = ${a} b = ${b}`);


  console.log("Pass by reference");
       function PassbyReference(c) {
        var temp = c.a;
        c.a = c.b;
        c.b = temp;
      
        console.log(`Inside Pass By Reference 
            Function -> a = ${c.a} b = ${c.b}`);
    }
    var c={a:10,b:20};
    console.log(`Before calling Pass By Reference 
        Function -> a = ${c.a} b = ${c.b}`);
      
    PassbyReference(c)
      
    console.log(`After calling Pass By Reference 
        Function -> a = ${c.a} b = ${c.b}`);