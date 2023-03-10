/* 
Hoisting is JavaScript's default behavior of moving declarations to the top.

In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
Example 1 gives the same result as Example 2:

*/

x = 3;
document.write(x);
var x;
(function () {
	y = 5;
	document.getElementById('div1').nextElementSibling.innerHTML = y;
	let y;
})()
	(function () {
		let y;
		y = 5;
		document.getElementById('div1').nextElementSibling.innerHTML = y;
	})()
	(function () {
		const c = 5;
		document.getElementById('div1').nextElementSibling.innerHTML = c;
	})()
