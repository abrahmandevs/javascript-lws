/*
	asynchronous javascript
*/
// class81 classs callBack
function display(v) {
	document.getElementById('div1').innerHTML = v;
}
function calculate(x, y, callBack) {
	let sum = x + y;
	if (callBack) callBack(sum);
	return sum
}
const cal = calculate(44, 55, display);

// class-82 classs asynchronous bahavior
let button = document.getElementById('clickbtn');
button.addEventListener('click', function () {
	/* setTimeout(function () {
		document.getElementById('div2').innerHTML = Math.floor(Math.random() * 200);
	}, 100) */
	setInterval(function () {
		document.getElementById('div2').innerHTML = Math.floor(Math.random() * 200);
	}, 2000)
})

// class-83 classs callback partern asynchronous bahavior
/* const paymentSuccess = true;
const marks = 40;
function enroll(callBack) {
	document.getElementById('div3').innerHTML = 'enroll ....';
	setTimeout(function () {
		if (paymentSuccess) {
			callBack()
		} else {
			document.getElementById('div3').innerHTML = 'invalid';
		}
	}, 2000)
}
function progress(callBack) {
	document.getElementById('div4').innerHTML = 'progress ....';
	setTimeout(function () {
		if (marks >= 30) {
			callBack()
		} else {
			document.getElementById('div5').innerHTML = 'invalid';
		}
	}, 2000)
}
function getCertificate() {
	if (true) {
		document.getElementById('div5').innerHTML = 'grate'
	}
}
enroll(function () {
	progress(getCertificate);
}) */

// class 84 promises

