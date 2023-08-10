let a = Number(prompt("Input a number: "));
let b = a/1000;
a = a%1000;
let c = a/500;
a = a%500;
//document.write(a,"<br>");
let d = a/200
a = a%200;
//document.write(a,"<br>");
let e = a/100;
a=a%100;
//document.write(a,"<br>");
let f = a/50;
a=a%50;
//document.write(a,"<br>");
let g = a/20;
a=a%20;
//document.write(a,"<br>");
let h = a/10;
a=a%10;
//document.write(a,"<br>");
let i = a/5;
a=a%5;
//document.write(a,"<br>");

document.write("1000 taka note: ",Math.floor(b),"<br>","500 taka note: ",Math.floor(c),"<br>","200 taka note: ",Math.floor(d),"<br>","100 taka note: ",Math.floor(e),"<br>","50 taka note: ",Math.floor(f),"<br>","20 taka note: ",Math.floor(g),"<br>","10 taka note: ",Math.floor(h),"<br>","5 taka note: ",Math.floor(i),"<br>");
