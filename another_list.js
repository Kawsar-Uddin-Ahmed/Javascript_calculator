
let x = [11,22,13,44,'hello'];

document.write(x[4]+"<br>"+x[3],"<br>");
document.write("Before change: ",x[2]," Full array : ",x,"<br>");
x[2] = 118;
document.write("After change : ",x[2]," Full array : ",x,"<br>");

let y = "Any Question";
document.write(y[1],"<br>");

let z = [10,11,12,15,45];

let m = z.length;
//document.write(m);
for(let i = 0 ;i<m ;i++)
{
	document.write(z[i],"<br>");
}

let a = [];

a[0]=10;
a[1]=20;
a[2]=30;
a[6]=60;

document.write(a.length,"<br>");//It will show length 7 because of last index is 6

let b = [];
for(let x=0;x<5;x++)
{
	b[x]=prompt("Input the number : ");
}
let l = b.length;
for(let x=0;x<l;x++)
{
	document.write(b[x],"<br>");
}
for(let x=l;x>=0;x--)
{
	document.write(b[x],"<br>");
}