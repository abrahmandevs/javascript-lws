/*

Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:

*/
const person = {
	name: "AR Rahman",
	status: {
		age: 12,
		study: 'read in class 9',
		passion: 'coding',
	},
	arry: ['nice', 'not bad', 'learn coding'],
	fnc: function () {
		document.getElementById('div2').innerHTML = '';
		for (let x in this.status) {
			document.getElementById('div2').innerHTML += `${this.name} loves ${this.status[x]} <br>`;
		}
		this.arry.forEach((x) => {
			document.getElementById('div3').innerHTML += ` <br>${this.name} ${x}`;
		})
	}
};
const show = () => {
	let get = document.querySelector('#search').value;
	document.querySelector('#show').innerHTML = get;
	setTimeout(() => {
		document.querySelector('#info').innerHTML = `${get}`;
	}, 100);
}
document.querySelector('#search').addEventListener('keyup', show);
person.fnc()

