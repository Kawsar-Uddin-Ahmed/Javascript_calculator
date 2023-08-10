let a = confirm("Are you 18 or older ?");
if(a) ///Here if the input is ok then true which means a only.
{
	alert("Welcome: "+a); //If you press of then true.
}
else
{
	alert("Just go away"+a);
}



if(true)
{
	document.write("The condition is true","<br>");
}
else
{
	document.write("The condition is false","<br>")
}


if(false)
{
	document.write("The condition is true");
}
else
{
	document.write("The condition is false")
}


let c = prompt("Input the number : ");
c=+c; //changing string a to number a;
let b=c%2;
if(b == 1)
{
	alert("It is an odd number");
}
else if(b == 0)
{
	alert("It is an even number");
}