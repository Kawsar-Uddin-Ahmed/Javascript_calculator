let x = prompt("Enter the number: ");
if(x) //if(x) takes by default non-empty value if(!x) takes empty value.
{
	alert("The x has value");
}
else
{
	alert("The x has no value");
}

//Nalis operator(??)

let a; 
alert(a??"Hello");///Here the variable a is undefined because no value is declared
                  ///.So the alert() will print the string after the ?? operator.

let b = "THis is has value not undefined";

alert(b??"Hello!!!!!!");


let c;

alert(c??14);

let d=16;

alert(d??145);//It will print d value because d is not undefined.

let e = 12;

alert(e || "No value");//It will print e value because e is not undefined.

let f = 0;

alert(f || "The value is zero means false in boolean");//It will not print f value because f is undefined in or operator..

alert(f??"hey") //Difference between or and nalish operator is or takes zero as undefined.


let g = 12;
alert(!!g); ///g has value .
           ///if you use !g = !true = false. If you use !!g =!!true=!false=true.here
           //converting the number to boolean.Same you can do to string.

let h = 0;
alert(!!h);//here h = 0 which means false.So !!h=!!false=!true=false.





