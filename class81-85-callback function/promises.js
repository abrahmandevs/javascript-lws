
/* let stat = true;
//promises definition
const promises = new Promise(function (resolve, reject) {
	setTimeout(function () {
		if (stat) {
			resolve('task 2')
		} else {
			reject('fail')
		}
	}, 2000);
});

//promises call
promises
	.then(function (value) {
		document.getElementById('div6').innerHTML = value;
	})
	.catch(function (err) {
		document.getElementById('div6').innerHTML = err;
	})

 */
//
const paymentSuccess = true;
const marks = 90;

function enroll() {
	document.getElementById('div3').innerHTML = 'enroll ....';
	const promises = new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (paymentSuccess) {
				resolve()
			} else {
				reject('invalid payment')
			}
		}, 2000);
	});
	return promises;
}
function progress() {
	document.getElementById('div4').innerHTML = 'progress ....';

	const promises = new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (marks >= 80) {
				resolve()
			} else {
				reject('you could not get enought marks')
			}
		}, 2000);
	});
	return promises;
}
function getCertificate() {
	document.getElementById('div5').innerHTML = 'preparing your certificate';

	const promises = new Promise(function (resolve) {
		setTimeout(function () {
			resolve = 'you could not get enought marks';
		}, 1000);
	});
	return promises;
}

/* enroll()// get reurn promises 
	.then(progress) // enroll promises need parameter 'resolve'
	.then(getCertificate) // enroll->progress promises need parameter 'resolve'
	.then(function (value) { // enroll->progress->getCertificate return promises parameter 'resolve' for this need call function
		document.getElementById('div6').innerHTML = value;
	})
	.catch(function (err) {
		document.getElementById('div6').innerHTML = err;
	}) */
// class 85 async await 
async function course() {
	try {
		await enroll();
		await progress();
		const message = await getCertificate();
		document.getElementById('div6').innerHTML = message;
	} catch (err) {
		document.getElementById('div6').innerHTML = err;
	}
}
course();


