/*

*/
// objects class 62
const person = {
	fname: " John",
	lname: " Doe",
	age: 25
};
let txt = '';
delete person.age;
for (let x in person) {
	txt += person[x];
}
document.getElementById('div1').innerHTML = txt;

const myObj = {
	name: "John",
	age: 30,
	cars: [
		{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
		{ name: "BMW", models: ["320", "X3", "X5"] },
		{ name: "Fiat", models: ["500", "Panda"] }
	]
}
let x = '';
for (let i in myObj.cars) {
	x += "<h1>" + myObj.cars + "</h1>";
	/* for (let j in myObj.cars[i].models) {
		x += myObj.cars[i].models[j];
	} */
}
let a = 'string'
//console.dir(myObj)

// objects methods

person.user = () => {
	console.dir(this)
}
person.user()

// objects display
objs = "";
for (let x in person) {
	objs += person[x] + " ";
};
arrays = ['rahman', 'robin', 'kamal']
//val = (Object.values(person))
val = JSON.toString(arrays)
//console.log(val)

// objects Accessors


// objects Constructors
function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.fullName = function () {
		return this.firstName + '    ' + this.lastName;
	}
}
const consfn = new Person('rahman', 'robin', 35);
//console.dir(consfn.fullName())
// objects Prototype
// objects Iterables

person[Symbol.iterator] = function () {
	let n = 0;
	let done = false;
	return {
		next() {
			n += 10;
			if (n == 100) { done = true }
			return {
				value: n,
				done: done
			}
		}
	}
}
for (let xe of person) {
	console.log(xe)
}

// objects sets
const letters = new Set(["1", "3", "4"]);

let text = "";
for (let et of letters.values()) {
	console.log(et)

};
// objects sets