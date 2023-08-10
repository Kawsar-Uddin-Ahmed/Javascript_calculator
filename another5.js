


let a = prompt("Input a number : ");
let b = prompt("Input another number: ");
let c=+a ; ///Here The prompt input is always string so by doing this the input will 
           ///change into a number.
let d=+b;

let y = c+d;
alert("The Result : "+y);/*Also you can use alert((+a)+(+b))..
                         Here the y is changed into string again because
                         number + string = string*/ 


document.write("Type of a : ",a," is a ",typeof(a),"<br>");
document.write("Type of b : ",b," is a ",typeof(b),"<br>");
document.write("Type of c where a is kept : ",c," is a ",typeof(c),"<br>");
document.write("Type of c where a is kept : ",d," is a ",typeof(d),"<br>");


let z=parseInt(prompt("Input y number : ")); ///This praseInt() is only integer
let x = parseInt(prompt("Input x number : "));

let u = z+x;
alert("Result of u : "+u);
document.write("Type of z where a is kept : ",z," is a ",typeof(z),"<br>");
document.write("Type of x where a is kept : ",x," is a ",typeof(x),"<br>");

let m = Number(prompt("Input a number again : "));///you can also take input :Number(prompt()).It
                                    //will change the string to the number.
let n = Number(prompt("Input another number again: "));

let ty = m+n;
alert("Result of m and n : "+ty);
document.write("Type of o after Number() : ",m," is a ",typeof(m),"<br>");
document.write("Type of p after Number() : ",n," is a ",typeof(n),"<br>");

let p = true;//boolean
document.write(+p);//changing into number
