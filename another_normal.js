var a = 12;
var b = 1;
var c = 5.30;
var d = 16;
var e = 2;
var f = 5.10;

class total
{
    constructor(w,x,y,z)
    {
        this.B = w;
        this.C = x;
        this.E = y;
        this.F = z;
    }
    total_result()
    {
       var g = (this.B * this.C ) + (this.E * this.F);
       var h = g.toFixed(2);
       return h;
    }
}

var obj = new total(b,c,e,f);

console.log("VALOR A PAGAR: R$",obj.total_result());


var i = [(b,c,e,f) =>
{
   var y = (b*c) + (e*f);
   return y.toFixed(2);
},2,3,4];

console.log("VALOR A PAGAR: R$",i[0](b,c,e,f));

var j = {"starting": (b,c,e,f) => {
   var yy = (b*c) + (e*f);
   return yy.toFixed(2);
},"age": 43};

console.log("VALOR A PAGAR: R$",j["starting"](b,c,e,f));


let ab = `Hello what are you doing in my house?
I am going to your room
For my cup`;
let aa = ab.split(); //It will make whole sentence one array.
document.write("aa: ",aa,"<br>");
let bb = ab.split("\n"); //it will divide the sentence from where the new line starts.
document.write(bb,"<br>");
let bb1 = bb.shift().split(" ")// It will take the first index of the divided sentences 
                               //using shift() and then it will divide the words of the 
                               //taken sentence using spaces between the sentence by help 
                               //of split(" ")
document.write("bb1: ",bb1,"<br>") 
let bb2 = bb.shift().split(" ")
document.write("bb2 : ",bb2,"<br>") 
document.write("bb1[0]: ",bb1.shift(),"<br>");
document.write("bb2[0]: ",bb2.shift(),"<br>");


