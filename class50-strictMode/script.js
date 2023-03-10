/* 
"use strict"; Defines that JavaScript code should be executed in "strict mode".

The "use strict" Directive
The "use strict" directive was new in ECMAScript version 5.
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
All modern browsers support "use strict" except Internet Explorer 9 and lower:

*/

'use strict'
x = 3;
document.write(x);
var x;
(function () {
	'use strict'
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
