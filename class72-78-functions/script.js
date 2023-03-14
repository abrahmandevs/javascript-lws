/*
	functions
*/
// class72 functin defenitions
let ano = function (a) { // anonymuch functions or it not host
	//console.log(a)
}
ano('thing');

(function (b) { // self invoking function // iffe functions
	//console.log(b)
})(55);

const c = (a) => { //arrow function dont cary this not hosted , 
	console.log(arguments.length) //function agruments objects
}
// class73 functin paremeters
//  premetin valau pass value copy and dont chenge value
//  object pass refarande and change referance value

// class74 functin invocation
// myfunct()  invocation
// new myfunct() invocation
// obj.a()  invocation
let arrowfun = function () { //arrow function dont cary this not hosted , 
	//console.log(this);
	let obj = {
		a: function () {
			//console.log(this);
		}
	}
	obj.a() // function call by obj that is invocation
}
arrowfun()

// class75 functin .call()
let person = {
	fullName: function (city, country) {
		return this.firstName + ' live in ' + city + ' ' + country;
	}
}
let person1 = {
	firstName: 'Rahman'
}
let perso2 = {
	firstName: 'Robin'
}
console.log(person.fullName.call(person1, 'Dhaka', 'bangladesh')) // function call by obj that is invocation

// class76 functin .apply()
let people = {
	fullName: function (city, country) {
		return this.firstName + ' live in ' + city + ' ' + country;
	}
}
let people1 = {
	firstName: 'Rahman'
}
let people2 = {
	firstName: 'Robin'
}
console.log(people.fullName.apply(people1, ['Dhaka', 'bangladesh'])); // function call by obj that is invocation
Math.max.apply(null, [1, 2, 3]);

// class77 functin closures

var button = document.getElementById("btnCount");
count = 0;
button.onclick = () => {
	count += 1;
	document.getElementById("counter").innerHTML = count;
};
