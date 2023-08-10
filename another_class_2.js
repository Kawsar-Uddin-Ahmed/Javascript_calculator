
class Animal
{
	constructor(name)
	{
		this.N = name;
	}
	speak()
	{
		document.write(this.N+ " makes a noise","<br>");
	}
	speak1()
	{
		document.write(`Father home is ${this.N}'s home`,"<br>");
	}
}

class Dog extends Animal
{
	speak()
	{
		document.write(this.N + " barks","<br>");
	}
	speak2()
	{
		document.write(this.N + " home is not father home","<br>");
	}
}


var d = new Animal("Ray's father");
d.speak();

var d1 = new Dog("Ray");

d1.speak();
d1.speak1(); 
d1.speak2();
//d.speak2(); It will not work.because parent class cannot access the method of child class.

