function welcome()
{
	let name = prompt("Input one name");
	document.write(`Welcome , ${name},<br>`);
}
welcome();


function login(userm) //Internally the pc will work like 
                      //this:login(userm = user_input).Now first userm will set
                      //userm value in document.write() because there is also a
                      ///same name variable.means userm will complete its own
                      //work inside the function where he found the same name.
{
	document.write(userm,"<br>");
}
let users = prompt("Input another user");
login(users);


function ok(user)
{
	document.write("Welcome , ",user,"<br>");
}

ok("bobby");


function discount(dis)
{
	if(dis >=1500)
	{
		dis=dis*0.085;
		document.write("Discount : ",dis,"<br>");
	}
	else
	{
		document.write("No discount","<br>");
	}
}

discount(1200);
discount(1800);


let na = 12;

document.write(!!na,"<br>");


function add(x,y)
{
	let b = x+y;
	return b;//return means the function is finished after return if
	                 ///there is any code inside the function it will not work
}

let am = add(4,10);
document.write(am);

function add2(x,y){
    return x+y;
    //the code below will be ignored
    document.write('Done!',"<br>");
}

let nm = add2(5,6);
document.write(nm,"<br>");

