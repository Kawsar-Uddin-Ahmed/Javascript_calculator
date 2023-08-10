
let a = {something: "hello",key: function s(){
    document.write("The first index: ",this.something,"<br>");
}}

a.key();
a["something"] = "hello !!! hi!!"
document.write("Updated value of something key : ",a.something,"<br>")
let b = a;
b.something = "This is changed after I assinged a variables value to b variable"
document.write(b.something,"<br>")
document.write("Now seeing a.something value changed doing b.something: ",a.something,"<br>");

b.new_key ="I am adding this new key in object";
console.log("after adding third key: ",b,"<br>");

function add(a,b)
{
	this.A =a;
	this.B = b;
	this.C = this.A + this.B;
}
var obj = new add(5,6);
document.write("sum: ",obj.C,"<br>");


var fun = (Right,Wrong) => //Here Right will call the then() and Wrong will call the catch()
                           // of the Promise(). Here Rigth and Wrong parameter are also works
                           //as a function
{
  var x = 7;
  if(x >= 8)
  {
  	Right("The value is correct");
  }
  else
  {
  	//Wrong("The value is wrong");//you can also write this.
  	Wrong(new Error("The value is wrong")); //customization of error message
  }
}

let d = new Promise(fun);
d.then(
	function(v) {document.write("The then function will catch the correct value: ",v,"<br>");},
    /*function(v) { document.write(v,"<br>");},
     function(e) { document.write(e,"<br>");}*/// we can use both in then function also
)
d.catch(
    function(e) {document.write("The catch function will catch the error: ",e,"<br>");}
	)


function f(a,b)
{
	a();//It will call the then() function.If you use alert() you can see the message
	alert("This message will show before the then() function message.before f() will run the whole function first");
	//remeber then() and catch() will not call same time here.
	b(); //It will call the catch() function.If you use alert() you can see the message
	alert("This message will show before the catch() function message.before f() will run the whole function first");

}
var obj1 = new Promise(f);
function x()
{
	alert("This x method is used as a parameter of then() function.");
}
function y()
{
	alert("This y method is used as a parameter of catch() function.");
}

obj1.then(x);
obj1.catch(y); //The a function will call the then and then function will call the x fun.
