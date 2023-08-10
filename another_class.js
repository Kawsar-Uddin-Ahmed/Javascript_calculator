
class Rectengular
{
	constructor(height,width)
	{
		this.H = height;
		this.W = width;
		this.resultl = this.H * this.W;
	} 
}

var s = new Rectengular(5,6);
document.write(s.resultl,"<br>");

var square = class Square { constructor(h){ this.H = h; this.r = Math.pow(this.H,2)}};
var ss = new square(5);
document.write(ss.r,"<br>");

class Point
{
	constructor(a,b)
	{
		this.x = a;
		this.y = b;
	}
	getX() { return this.x;}
	getY() { return this.y;}
}

var obj = new Point(5,6);
document.write("getX(): ",obj.getX(),"<br>");
document.write("getX(): ",obj.getY(),"<br>");

class pointing
{
	constructor(a,b)
	{
		this.x = a;
		this.y = b;
	}
	static distance(u,i) // static method, which cannot be called through a class object.
	{
		const dx = u.x - i.x;
		const dy = u.y - i.y;
		return Math.hypot(dx,dy);
	}
}
const p1 = new pointing(7,2);
const p2 = new pointing(8,9);

document.write(pointing.distance(p1,p2),"<br>");//you can call it p1.distance() or p2.distance()

