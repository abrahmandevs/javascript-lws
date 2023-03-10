/*
maps key-value pairs
objects key awaloys string but maps keys can be any datatype
essensial map methods => create new Map(), add value set(), get key get(), remove key value delete(), return true if key exists has(), looping function forEach()
return entries enrties() use forof loop
property => return length size() 
*/

const myset = new Map([["apple", "banana"], ["chile", "papaya"], ["pinapal", "orange"]]);
console.log(myset)

let getSet = '', getSet2 = '';
myset.forEach(function (value, key) {
	getSet += `<li>${key + ' = ' + value}</li>`;
})

// use forof loop when set.values()
let repl = '';
for (let x of myset.entries()) {
	console.log(x);
	for (let i of x) {
		console.log(i)
		if (true) {
			getSet2 += `<li>${i}</li>`;
		}
	}
}

document.getElementById('div1').innerHTML = getSet;
document.getElementById('div2').innerHTML = getSet2;