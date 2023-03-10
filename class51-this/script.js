/*

What is this?

In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

Note
this is not a variable. It is a keyword. You cannot change the value of this.

*/
// Create an object:
//In an object method, this refers to the object.

const person = {
	firstName: "AR",
	lastName: "Rahman",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
};
document.getElementById('div1').nextElementSibling.innerHTML = person.fullName();

//JavaScript strict mode does not allow default binding.
"use strict";
function myFunction() {
	return this;
}
console.log(Math.floor(100000 + Math.random() * 900000));
function bgFunction() {
	//return bg_color = document.body.style.backgroundColor = '#' + Math.floor(100000 + Math.random() * 900000);
	let bgColor = '#' + Math.floor(100000 + Math.random() * 800000);
	let color = '#' + Math.floor(100000 + Math.random() * 900000);
	return document.body.setAttribute('style', `font-size: 2rem; color:${bgColor}; background-color:${color};`);
}
function doc() {
	/* document.addEventListener('click', function () {
		console.log('afa');
	}); */
	document.body.addEventListener('mouseover', function (event) {
		let x = event.clientX;
		let y = event.clientY;
		let bgColor = '#' + Math.floor(100000 + Math.random() * 800000);
		let color = '#' + Math.floor(100000 + Math.random() * 900000);
		document.querySelector('#div1').innerHTML = x + ' ' + y;
		return document.body.setAttribute('style', `height:${y}px; font-size: 2rem; color:${bgColor}; background-color:${color};`);
	})
}
doc()

