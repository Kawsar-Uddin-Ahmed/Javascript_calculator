
function sum(a,b)
{
	return a+b;//return means the function is finished after return if
	                 ///there is any code inside the function it will not work
	/*this.A = a ;
	this.B = b;
	this.C = this.A + this.B;
	return this.C;*/

}

function multi(a,b)
{
	return a*b;//return means the function is finished after return if
	                 ///there is any code inside the function it will not work
	/*this.Y = y ;
	this.Z = z;
	this.X = this.Y * this.Z;
	return this.X;*/
}

while(true)
{
	let p = prompt("Write option : sum multi");
	if(p == "sum")
	{
		let m = Number(prompt("First number: "));
		let n = Number(prompt("Second number: "));
		let t = sum(m,n);
		alert(t);
	}
	else if(p == "multi")
	{
		let o = Number(prompt("First number: "));
		let p = Number(prompt("Second number: "));
		let h = multi(o,p)
		alert(h);
	}
	else if(p == "exit")
	{
		break;
	}
}