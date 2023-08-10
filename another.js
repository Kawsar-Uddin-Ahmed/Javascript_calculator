console.log("What are you doing");

let a=10
let b=17
var c = "Kawsar"
document.write(c," ",a+b,"<br>");

let age=18;
age=9;
document.write(age,"<br>");/*here send age will be taken.if you write let before second age
                      variable then the program will not run due to overwritten of 
                      variable*/

const color="red";

document.write(color,"<br>");
//color ="yellow"; //It will not work because this is declared as a constant in previous.
//document.write(color);

let x=19;
x++;
document.write("X: ",x,"<br>");
let y = 99;
++y;
document.write("Y: ",y,"<br>");


document.write(`This is called template string`,"<br>");
console.log(`What are you doing?
	I\`trying to write template string`);

let na = 29;
console.log(`James age is ${na}`);


document.write('I \'am writting with backslash',"<br>");

document.write ("She is studying about \"blackslash\"","<br>");


let  va = confirm("Are you a student? ");//If you press OK.You will see true and cancel false.
alert(va);


let cv = Number(prompt("Input number: "));
/* Or you can use variable=+cv if you do not use Number() before prompt()*/
alert(cv %2);

let u = prompt("Input something"); ///Remember if() only works when condition is true.

if(!u) /*(u == "" and !u is same) /*Empty means false and if any input except zero
 means true.If(u) is by default is true means takes non-empty input.
If u is empty then !u = !false = true and the if will run
If u is non-empty then !u = !true=false and the else will run.
If u is zero than it will be count as empty.So, !u =!false =true*/
{
	document.write("It is empty","<br>");
}
else
{
	document.write(u,"<br>");
}

let v = 10>=20;
if(v) //when v will come to if() the value will be checked here first.
{
	document.write("It is true","<br>")
}
else
{
	document.write("It is false","<br>");
}

///or(||) works like a + means false + true = true (0+1 = 1)
///If any input is empty it treats like false..If input non empty it treats like true
let m = true && false;
alert(m); //and(&&) works like a X means false x true = false (0*1 = 0);

let n = true || false;
alert(n); 


let yy = 10;

if(yy == "10")
{
	alert("Double equal");
}

let mm = 10;
if(mm === "10")
{
	alert("Double equal");
}
else 
{
	alert("Thripple equal means strongly agree.but here m is number not string");
}


//Tenary operator


let age1 = 32;

let Age = (age1 >32)? "If the condition is true it will show left part":"If the condition is false it will show right part"; 
document.write(Age);

//The tenary operator in if--else statement

/*let age = 32;
if(age > 32)
{
	document.write("If the condition is true it will show if() part");
}
else
{
	document.write("If the condition is false it will show else part);
}*/

let xxxx = true ? "This will print if x value is true":"This will print if x value is false";

console.log(xxxx);

let xm = 1e3;
alert(xm);

