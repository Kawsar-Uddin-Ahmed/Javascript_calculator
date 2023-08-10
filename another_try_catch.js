try
{
	a = [1,2,3,4,5,6,7,8];
	document.write(a,"<br>");
	document.write(b,"<br>");
}
catch(e)
{
	document.write("There is an error : "+e.message,"<br>")
}

try
{
	throw new Error("Using throw User can define and throw their own custom errors message");
}
catch(e)
{
	document.write(e.message);
}

try
{
	var a =2;
	if(a == 2)
	{
		document.write("try ok","<br>");
	}
}
catch(e)
{
	document.write("The error is : "+e.message);
}
finally //It will release anytime after try or after catch by default.
{
  document.write("Finally is an optional block of statements which is executed after the execution of try and catch statements. Finally block does not hold for the exception to be thrown. Any exception is thrown or not, finally block code, if present, will definitely execute. It does not care for the output too.","<br>");
}

//A JavaScript Promise object contains both the producing code and calls to the consuming code.

/*let c = new Promise(function(resolve,reject){ //here resolve and rejec twill call the 
	                                          //then function 

let x = 5;
if(x == 0)
{
	resolve("ok");
}
else
{
	reject("No");
}
})
c.then(
  function(value) {document.write(value,"<br>");},
  function(error) {document.write(error,"<br>");}
);


let b = new Promise(function(MyResolve , Myerror) // (MyResolve,Myerror) => {.....}
	                            //here MyResolve will call the then() function
	                            //here Myerror will call the catch() function

{
	let x = 10;
	if(x == 10)
	{
		MyResolve("OK resolved","<br>");//It will pass the value in then()
	}
	else
	{
		Myerror("Not right","<br>");//It will pass the value in then()
	}

} 
)

b.then ( function(value){ document.write(value);});
b.catch(function(error){document.write(error)});


let d = () =>{ document.write("Outer function called from Promise and it will be called first.","<br>")}

let ob = new Promise(d);


/*let y = () => { document.write("Called by set time out.IT will show after 1 sec because 1000 nano given","<br>")};
let u = setTimeout(y,1000);
clearTimeout(u);

let z = () => {document.write("Called by set interval.So it will be called after every 1 sec because 1000 nano is given","<br>")};

let ff = setInterval(z,1000);
clearInterval(ff); //to stop setInterval function.Now the setInterval will not run
*/
/*let i = (a) => { document.write("Call from a funtion.A value: ",a,"<br>")};

let j = () => { i(100);}

i(j());
//setTimeout(j,5000);
//alert("After setTimeout().But I will publish now I am not waiting setTimeout to release");//It will not wait for setTimeout if it is alert() only.

let xx = () => { document.write("This is from xx : ")};
let bb = setInterval(xx,100);//It will call and the function in every 1 sec
setTimeout(() => { clearInterval(bb);},1000); 
///After 10 second the function inside the setTimeout will call clearInterval().
//if you put setTimeout(clearInterval(bb),10000) it will not work.
/*let aa = (a) => { document.write("The value : ",a);}
let iu = new Promise((Resolve,Error) =>
{
  setTimeout(aa(10),1000);

})*/

let f = new Promise((resolve,error) =>
{
	resolve({key:"Onekey",key1:"twokey"});
})
f.then(({key,key1}) => {
	document.write("The key: ",key," the second key: ",key1)
})
