//Every object has a method and property.document is an object. write() is
//the method of the document object. innnerHTML or getElementById() is the 
//property of the document object.

var person = {"name":"Jhon","age":"21","favcolor":"green","height":"184"};
let x = person['age'];///person.age //here age is the property of person object
document.write(x,"<br>");

let y = Object.values(person).length;//here length means the number of elements.
document.write(y,"<br>"); ///here write() is the method of the document object.

function persons(name , age, title)
{
	this.Name=name;
	this.Age=age;
	this.Title=title;
}

var p1 = new persons("jhon",42,"Doctor");//new persons is the method of the p1 object
                                         //"this.Name" is the property of p1 object
var p2 = new persons("James",32,"Millionare");
document.write(p1.Name,"<br>");
document.write(p2.Name,"<br>");

function add(x,y)
{
	this.a = x;
	this.b = y;
	this.c = this.a + this.b;
	//return this.c; //return means the function is finished after return if
	                 ///there is any code inside the function it will not work
}

let ob = new add(5,10);

document.write(ob.c,"<br>");//document.write(add(5,10),"<br>"); use return this.c



function g(name,age)
{
   this.Name = name;
   this.Age = age;
   this.changename = function(n)
   {
   	this.N = n; ///If you give there this.Name then the g function the all name will
   	            /// be changed
   }
}
let gm = new g("David",21);
gm.changename("John");

document.write(gm.Name,"<br>");
document.write(gm.N,"<br>");//document.write(gm.changename("John")) will show undefined


function p(name,age)
{
	this.Name = name;
	this.Age = age;
	this.YearOfBirth = bornyear; //If you do not declare the bornyear inside p function
	                             //The object of p function will not get it from
	                             //outside.Means p3.YearofBirth or p3.YearofBirth()
	                             //will be undefined.or p3.bornyear() will not work.
}

function bornyear()
{
	this.a = 2023 - this.Age;
	this.YearOfBirth = this.a;
	return this.YearOfBirth;//return means the function is finished after return if
	                 ///there is any code inside the function it will not work
	//return 2023 - this.Age;
}

let p3 = new p("David",24);
//let bo = new bornyear();
document.write(p3.YearOfBirth(),"<br>");//this will work when you use return in the function



let prop = "name";
let id ="1234";
let mobile = "0192458224";
let user = {[prop]:"Jack",[`user_${id}`]:[mobile]};

document.write(user[`user_${id}`],"<br>");

let person1 = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};

let st = Object.assign({},person1,student);//it will only print the data of student 
                                           //object when both key are common.
document.write(st.name,"<br>")

let basic1 = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced1 = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

let total1 = Object.assign({},basic1,advanced1);

for(let ex in total1) //of will not work here because object are not iterable.
	                  //only in will work.
{
	document.write(total1[ex],"<br>")
}

let obj1 = {
  a: 0,
  b: 2,
  c: 4
};
let obj2 = Object.assign({c: 5, d: 6}, obj1);
document.write(obj2.c," : ", obj2.d,"<br>");//It will be 4 :6 because c and d value will not change.

let obj4 = () => { return [14,12,15]};
let [one,two] = obj4();
document.write(one,"<br>");

let a,b,c=4,d=8;
[a,b] = [2,3];
[c,d] = [d,c];
document.write(a,"<br>");
document.write(b,"<br>");
document.write(c,"<br>");
document.write(d,"<br>");

