
let courses = new Array("HTML","CSS","JAVASCRIPT","JAVA");
document.write('courses[0]: ',courses[0],"<br>");
document.write("Before array change: ",courses,"<br>");
courses[3] = "Python3";
document.write("After array change : ",courses,"<br>")

let course = ["HTML","CSS","JAVASCRIPT"];
let cou = ["JAVA","Python","Lua"];

let c = course.concat(cou);
document.write("After concatenate: ",c,"<br>");

///Associative array.The the index number will be name no number.
///It is not using in programming generally.

let person = [];
person["name"] = "Jhon";
person["age"] = 45;

document.write(person["name"],"<br>");

let m = ["Apple","Mango","Orange"];
document.write("Before pop up : ",m,"<br>");
m.pop()
document.write("After pop up : ",m,"<br>");
m.push("JackFruit");
document.write("After push: ",m,"<br>");

let x = new Date();
document.write(x,"<br>");
document.write(x.getHours(),"<br>");

let a = {name:"James",age:42,country:"USA"};

document.write(a["name"],"<br>");

let b = [];
b[0] = {name:"Jahed",age:28};
b[1] = {name:"Akib",age:27};

for(let x = 0 ;x<b.length;x++)
{
	document.write(`Name : Age =>  ${b[x]["name"]} : ${b[x].age}`,"<br>");//document.write(b[x].name,"<br>")
}


let d = {"keys":["hello","hi"],"key2":"Ok"};
document.write(d["keys"],"<br>");
let e = d.keys;
document.write(e[0],"<br>");

d.keys = ["How are you","Hello"];
document.write("After change : ",d["keys"],"<br>");


//2d array

let dm = [1,[11,12,13,14,15,16],3,4,5,6,]
document.write("All array element 2d array dm: ",dm,"<br>");
document.write("Only Inside array dm[1]: ",dm[1],"<br>");
document.write("Only one element of inside array dm[1][0]: ",dm[1][0],"<br>");

let em = [1,[11,12,13,[113,114,115,116,117],15,16],3,4,5,6,]
document.write("All array element 3d array em: ",em,"<br>");
document.write("Inside array dm[1] element: ",em[1],"<br>");
document.write("Element of inside array dm[1][3]: ",em[1][3],"<br>");
document.write("Only one element of inside array dm[1][3][1]: ",em[1][3][1],"<br>");
document.write("All elements of 3d's 3rd array: ","<br>");
for(let x = 0 ;x<em[1][3].length ;x++)
{
   document.write(em[1][3][x],"<br>");
}

let fm = [[1000,1100,11200,14500,1600],[2],[3],[4],[5],[6],[7]];
//document.write(fm.length,"<br>");
for(let x = 0;x<fm.length;x++)
{
	for(let y = 0;y<fm[x].length;y++)
	{
		document.write(fm[x][y],"<br>");
	}
}



