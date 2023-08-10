//for runing two function in multiple time.
async function timeout() 
{
    setTimeout(() =>{ 
        alert("after 10 second")
    },10000);
}
async function timetwo() 
{
  let i =0;
  let end = setInterval(() =>{ 
    if(i>1000)
    {
        clearInterval(end);
    }
    document.write(i,"<br>");
    i++
  });
}
timeout();
timetwo();
