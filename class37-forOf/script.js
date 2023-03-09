// for of loop spacial use iterable for array, string , maps, node
const fruits = ["apple", "banana", "chile", "papaya", "pinapal", "orange", "mango"]

// do not use for in over an Object
// it is better to iterable use for array, string , maps, node 
// it is return value not return index 
let aray = "";
for (let x of fruits) {
	aray += `<li>${x}</li>`;
	document.getElementById("div1").innerHTML = aray + "for of loop"
}
const user = 'rahman';
(function (value) {
	let v = '';
	for (let x of value) {
		v += `<li>${x}</li>`;
		document.getElementById("div2").innerHTML = v + "iife";
	}
})(user);