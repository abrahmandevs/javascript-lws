/* 
The try statement defines a code block to run (to try).
The catch statement defines a code block to handle any error.
The finally statement defines a code block to run regardless of the result.
The throw statement defines a custom error.

*/

function myFunction() {
	const message = document.getElementById("p01");
	message.innerHTML = "";
	let x = document.getElementById("userName").value;
	try {
		if (x.trim() == "") throw "empty";
		if (x.length < 2 || x.length > 40) throw "User Name will be 2 - 40 characteres";
	}
	catch (err) {
		message.innerHTML = err;
	}
}
