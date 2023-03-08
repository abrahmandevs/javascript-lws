// sets
// create a sets new Set()
// add a sets add()
const myset = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

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