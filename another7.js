
let a = Number(prompt("Input the price of Rice : "));
let a1 = Number(prompt("Input the quantity of Rice : "));

let b = Number(prompt("Input the price of Dal : "));
let b1 = Number(prompt("Input the quantity of Dal : "));

let c = prompt("Write the number of oil : 1.Soiabin 2.Mustard")
let c1;
if(c == 1)
{ 
    c1 = Number(prompt("Input the quantity of Soiabin Oil : "));
}
else if(c == 2)
{
     c2 = Number(prompt("Input the quantity of Mustard Oil : "));
}

let d = Number(prompt("Input the price of Salt : "));
let d1 = Number(prompt("Input the quantity of Salt : "));

let e = Number(prompt("Input the price of Beans : "));
let e1 = Number(prompt("Input the quantity of Beans : "));

let sum1 = a *a1;
let sum2 = b * b1;
let sum3;
if(c == 1)
{
	 sum3 = 120 * c1;
}
else if(c == 2)
{
	sum3 = 150 * c2;
}
let sum4 = d * d1;
let sum5 = e * e1;
let total = sum1 + sum2 + sum3 +sum4 + sum5

document.write("Rice: ",a,"x",a1," = ",sum1,"<br>");
document.write("Dal: ",b,"x",b1," = ",sum2,"<br>");

if(c == 1)
{
 document.write("Soiabin: ",120,"x",c1," = ",sum3,"<br>");

}else if(c == 2)
{
 document.write("Mustard: ",150,"x",c2," = ",sum3,"<br>");
}

document.write("Slat: ",d,"x",d1," = ",sum4,"<br>");
document.write("Beans: ",e,"x",e1," = ",sum5,"<br>");
document.write("==========================================","<br>");
document.write("Total: ",total,"<br>")

