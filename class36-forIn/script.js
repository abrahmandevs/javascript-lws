// for loop
const fruits = ["apple", "banana", "chile", "papaya", "pinapal", "orange", "mango"]
const person = {
	fname: "AR",
	lname: "Rahman",
	age: 20,
	study: "honours",
	relagious: "islam",
}
let items = "";
for (let x in person) { // spacial use for in loop for object 
	items += `<li>${person[x]}</li>`
	document.getElementById("div1").innerHTML = items + "for in loop"
}
// do not use for in over an array
// it is better to use for, for of or array.forEach() when the order is important
let aray = "";
for (let x in fruits) {
	aray += `<li>${fruits[x]}</li>`;
	document.getElementById("div2").innerHTML = aray + "for in loop"
}
// spacial use array.forEach() for array 
let fu = '';
fruits.forEach(function (value) {
	fu += `<li>${value}</li>`;
	document.getElementById("div3").innerHTML = aray + "for in loop";
})