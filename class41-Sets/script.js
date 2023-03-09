/* 
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.

sets
create a sets new Set()
add a sets add() 
size() [method]
*/
let ary = ['a', 'b', 'c'];
const myset = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(myset.size)
(function (value) { /// add sets
	for (let x = 0; (x < value.size || x < value.length); x++) {
		let newsets = [x].sort(function (a, b) {
			return a - b;
		});
		let sets = newsets.toString();
		for (let x of sets) {
			myset.add(x);
			console.log(x)
		}
		// console.log([x].sort())
	}
})(myset)

let getSet = '', getSet2 = '';
myset.forEach(function (value) {
	getSet += `<li>${value}</li>`;
})
// use forof loop when set.values()
for (let x of myset.values()) {
	getSet2 += `<li>${x}</li>`;
}
document.getElementById('div1').innerHTML = getSet;
document.getElementById('div2').innerHTML = getSet2;

