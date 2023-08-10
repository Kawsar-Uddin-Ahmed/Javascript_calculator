document.write("<h1>Hello</h1>");

var x = document.getElementsByTagName("h1");
x[0].innerHTML = "Hello!! Change from javascript file."

function wel()
{
    var xx = document.getElementById("name");
    alert("Welcome!!!"+xx.value)
}

function show()
{
   alert("Used onclick here.It is DOM");
}

function run()
{
    alert("The onload loaded");
}

function showing()
{
    alert("The showing ok");
}

document.onclick = () => {alert("This is arrow function. ")}


/*function secret()
{
    alert("This is secret");
}
var d = document.getElementById("secretbutton");
d.onmousemove=secret;*/
