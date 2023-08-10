let a = function(a,b)
{
  return a+b;
}

document.write(a(5,6),"<br>");

let b = [function(a,b){
	return a*b;
},10,20,30];

document.write(b[0](6,7),"<br>")
document.write(b[1],"<br>");

let b1 = [function multi(a,b){
	//document.write("b1[2]: ",b1[2],"<br>")
	return a*b;
},10,20,30];

document.write(b[0](7,8),"<br>")
document.write(b[1],"<br>");

let c = {"name":["hello!!","hi!!"],"age":43};
document.write(c["name"],"<br>");
document.write(c["name"][0],"<br>");

let d = {"student":function(a){document.write("Hello!!",a," ","d['roll'] :",this.roll,"<br>");},"roll":45};
d.student("Jahed");//d["student"]("Jahed");

function f(name,age)
{
	this.Name = name;
	this.Age = age;
	this.year = born; //this.year = function born(){...........}
}
function born()
{
	this.a = 2023 - this.Age;
	this.year = this.a;
	return this.year;
}

let obj = new f("John",56);
document.write(obj.year(),"<br>");

let ab = (n,m)=>{ return n*m;}
document.write(ab(12,13),"<br>"); //this is also a function

((n,m)=>{
	document.write(n+m,"<br>");
})(8,9);//this is also a function

const greet = x => "Welcome " + x;
document.write(greet("Don"),"<br>");//here mainly the function is greet(x)
//Callback function

function fun(a) //Internally it will be fun(a=fun1()).As the
                //variable value is a function not a normal 
                //value so first fun1() will execute by its own and return 
                //value will be store in "a" variable than the fun(a = return value)
                //now it will show return value as  a a value.
{
	document.write("Printing return of fun1(): "," ",a,"<br>");
}

function fun1()
{
	document.write("This is inside the fun1","<br>");
	return "If no return written than it will show undefined";
}

fun(fun1());

const arr1 = [2,3,4,5,6];
arr1.forEach(function(el) {
  document.write(el * 2,"<br>");
});

arr1.forEach(v => {document.write(v+2,"<br>");});

var aa = 5
var bb =6
var cb = 7
var dd = 8

var dm = (w,x,y,z)=>{
    this.A = w;
    this.B = x;
    this.C = y;
    this.D = z;
    let diff = (this.A * this.B) - (this.C * this.D);
    return diff;
};
 document.write("DIFERENCA =",dm(aa,bb,cb,dd));