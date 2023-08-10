
//If you want to take it as number use:Number(prompt())

let a1 = prompt("Enter the a1 value: ");
let b1 = prompt("Enter the b1 value :");
let c1 = prompt("Enter the c1 value : ");
let a2 = prompt("Enter the a2 value : ");
let b2 = prompt("Enter the b2 value : ");
let c2 = prompt("Enter the c2 value : ");
let x = (c1*b2 - c2*b1)/(a1*b2 - a2*b1);
let y = (c1*a2 - c2*a1)/(a2*b1 - a1*b2);

document.write(x,"<br>");
document.write(y,"<br>");
console.log(x,"<br>");
console.log(y,"<br>");

alert(x);//It will take x as a string.But if you use Number() in prompt() 
         //it will take x in number.

alert(y);//It will take y as a string.But if you use Number() in prompt() 
         //it will take x in number.

alert("OK Complete");