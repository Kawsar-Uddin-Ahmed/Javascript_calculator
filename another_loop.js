/*
//It is an infinte loop because there is no increment or decrement of the i variable.
let i = 0;
while(i<=10) {
    console.log(i);
}

let ij = 0;
while(ij<=10) {
    console.log(i,"<br>");
    ij++;
}

let iii = 10;
do
{
	console.log(iii);
	iii++;
}
while(iii<20)


let sum=0; 
for(let i=1; i<=3; i++) {
    if (i == 2) {
    continue; ///2 number will not be added because when i=2 the 2 will be skip and ignore
              ///and continue.
  }
  sum += i;
  //console.log(sum);
}
console.log(sum);


//Print only even number

for(let ii = 1;ii<=100 ;ii++)
{
	if(ii%2!=0)
	{
		continue; //When the reminder is not zero it will continue(means it will 
		           //escape the odd numbers and only print the even number)
	}
	console.log(ii);
}


let num =1;
for(;num<=100;num++)
{
    if(num == 10)
    {
        continue;
    }

    console.log(num);
}
*/
let a = true;
let b = 1;
while(a)
{
  document.write("Hello!!!","<br>");
  if(b === 10)
  {
     a = false; //When b = 10 the loop will break.
  }
  b++;
}
document.write("Now b = 10 so the infinte while loop broken.","<br>");

//Prefix and Postfix

let x = 10;
let y = ++x ; ///here it is first y = x+1 and than x=y 
document.write("Here y is 11 because in prefix it will first add (x+1) then keep the increased value in both y and x, y: ",y," x: ",x,"<br>");

let xx=10;
let yy=xx++;//here yy=x and than xx+1 and the value store in xx.

document.write("Here y is 10 because in postfix it will first keep in yy and then add (x+1) and then keep the increased value in x , yy: ",yy," xx: ",xx,"<br>");


let m = 1;
let n = 0;
while(true)
{
  if(m%2 == 0)
  {
     n=n+1;
  }
  if(m == 21)
  {
    break;
  }
  m++;
}
document.write("Total even number: ",n,"<br>");


//It is infinte for loop . Also for(;;) OR for(;true;)

/*for(alert("hi!!");true;alert("hello!!!"))
{
  alert("body");
}*/

let aa = prompt("Input a number: ");
aa=+aa;

let mm = true;

for(let xm = 2 ;xm<aa;xm++)
{
  if(aa%xm == 0)
  {
    mm=false;
    document.write("Not prime","<br>");
    break;//for stoping the repeat of document.write(string) in big number.
  }
  /*else
  {
    document.write("Prime");
    break;
  }*///Using else inside loop is wrong here in this program.
}
if(mm)
{
  document.write("Prime","<br>");
}

let aj = [1,2,3,4,5,6,7,8,9,10];
for(a of aj)
{
  document.write(aj,"<br>");
}
for(a in aj)
{
  document.write(aj,"<br>");
}
