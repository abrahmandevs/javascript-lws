// for loop
const fruits = ['apple', 'banana', 'chile', 'papaya', 'pinapal', 'orange', 'mango'];
let fruit = '';
for (let i = 0; i < fruits.length; i++) {
	fruit += `<li>${fruits[i]}</li>`;
	document.getElementById('div1').innerHTML = fruit + 'Traditional for loop';
}

for (let i = 0, ft = ''; i < fruits.length; i++) {
	ft += `<li>${fruits[i]}</li>`;
	document.getElementById('div2').innerHTML = ft + 'Multiple expresion Init';
}

let i = 0, ft = '', len = fruits.length;
for (; i < len; i++) {
	ft += `<li>${fruits[i]}</li>`;
	document.getElementById('div3').innerHTML = ft + 'Out side Init';
}
