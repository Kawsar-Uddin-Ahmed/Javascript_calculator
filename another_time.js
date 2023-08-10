function printTime()
{
	let y = new Date();
	let h = y.getHours();
	let m = y.getMinutes();
    let s = y.getSeconds();
    document.body.innerHTML = h+":"+m+":"+s;//The innerHTML property can be used 
                                            //n almost all HTML elements to change its content.
}

setInterval(printTime,1000);