/* The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each).

An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:

1) The keys can be any type including functions, objects, and any primitive.

2) You can get the size of a Map.

3) You can directly iterate over Map.

4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.

*/

let map = new Map([['k1','v1'],['k2','v2']]);

document.write("Size of map: ",map.size,"<br>");

for (let kv of map)
{
	document.write(kv[0]+" : "+kv[1],"<br>");
}


let m = new Map();

m.set('key1',"value1").set("key2","value2").set("key3","value3"); // 3 values are added.

for(let kv2 of m)
{
	document.write(kv2[0]+" : "+kv2[1],"<br>");
}

const ma = new Map();
ma.set('one', 1);
ma.set('2', 'two');
if (ma.has('two')){//It will not work because two is not key. key is 2.. two is value
  console.log('two');
} else {
  console.log(ma.get('one'));
}

  let set = new Set([1,2,3,4,5,6]);

  document.write(set.size,"<br>");

  let set1 = new Set();

  set1.add(11).add(12);
  set1.add(14);

  for(let ss of set1)
  {
  	document.write(ss,"<br>")
  }


  let res = [4, 5, 1, 8, 2, 0].find(x1 => x1 > 3);
  document.write(res,"<br>");
