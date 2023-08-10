/*function v()
{
	alert("This will run after the function of the setTimeOut");
}

setTimeout(v,1000)
alert("It will print first because setTimeOut is a asynchornous function")

function t ()
{
	alert("This is called after 10 second")
}
function u()
{
	let xy = setTimeout(t,10000);//this will run after 10 sec
	alert(typeof(xy)); ///Here it will show number.because setTimeout will return number

}

var yy = u()
alert(typeof(yy)); //Here it will show undefined because the function has no return .
*/

function b()
{
	alert("hello")
}

async function c()
{
	let d = await new Promise((res,err) => //Promise() naturally an asynchronous function.
		                                   // await makes it synchronous.
	{
		setTimeout(() =>{
			res(`The Promise normally is a synchornous function.But here the 
                 main function c() is an asynchornous function.So I have
                 use await keyword before the Promise function,so that the 
                 asynchornous function c() work synchornously.So,when I will
                 run the code the code will wait for 5 sec and run what is
                 inside the setTimeout().After that it will run the next message
                 of the main function c().But if I do not run use await keyword
                 here the function c() would first run the outer message
                 and after that it would run the setTimeout().This message is 
                 inside the setTimeout() function and it is run after 5 sec.
                 Remember await keyword can only used inside asynchornous function.`);
		},5000);
		//res();//if you use this then it will make the program finish and print last message
		        // after what is inside the Promise().but here for setTimuout you will
		        //see undefined
	}).then(function(v){alert(v)});//here res(`....`) / res() is called.  
	alert("after the Promise function")
}

let xy = c()

async function d()
{
	let d = await new Promise((res,err) => //Promis() naturally an asynchronous function
	{
		alert("Inside the Promise()")
		res();//if you use this then it will make the program finish and print last message
		        // after what is inside the Promise(). otherwise the outer message will
		        //never be printed because the await will thing that the Promise() work
		        //is not finished
	})
	alert("Out of the Promise function")

}
let bc = d()

function b()
{
	alert("hello")
}

async function e()
{
	let f = await new Promise((res,err) => //Promis() naturally an asynchronous function
	{
		setTimeout(() =>{
			res(`Here I passed the setTimeout value in the outer alert()`);
		},5000);
		//res();//if you use this then it will make the program finish and print last message
		        // after what is inside the Promise().but here for setTimuout you will
		        //see undefined
	})
	alert(f);
}

let xyz = e()
alert(typeof(xyz));