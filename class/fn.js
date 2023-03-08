function myfn(data) {
	console.log(typeof data);
	if (!data && data != Object) {
		if (data !== null) {
			alert(data + ' Please insert value');
		}
	} else {
		let innettext = data;
		let x = 0;
		let tx = '';
		while (x < innettext.length) {
			tx += x + innettext + ' ';
			document.getElementById('div1').innerHTML = tx.toUpperCase();
			x++
		}

		let nx = '';
		for (x = 0; x < innettext.length; x++) {
			nx += x + innettext + ' ';
			document.getElementById('div2').innerHTML = nx.toUpperCase();
		}
	}
}
myfn(4)
let array = ['apple', 'banana', 'papiya', 'mangos', 'nout', 'coconat'];
let ft = '';
for (x = 0; x < array.length; x++) {
	ft += '<li>' + array[x] + '</li>';
	document.getElementById('div3').innerHTML = ft;
}
function getNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
document.getElementById('div4').innerHTML = getNumber(2, 6);

const students = ['rahman', 'robin', 'rohim', 'korim', 'kamal', 'makam'];
const numbers = [2, 3, 44, 5, 6, 7, 77, 8, 8, 1, 2, 33, 5];

const duplicats = numbers.filter(function (value, index, array) {// duplicates check
	return array.indexOf(value) === index;
});

const roll = duplicats.sort(function (a, b) { // asending order
	return a - b;
});

function foloop(lop) {// for each loop with array 
	let numbers = '';
	lop.forEach(function (value, index, array) {
		numbers += '<li>' + value + '</li>';
		document.getElementById('div5').innerHTML = numbers;
	});
}

foloop(roll) // calling function passign arguments as a [roll] array
var fName = function (bro) { // make a anonymuse function 
	let newArray = '', sis = '';
	newArray = Array.from(bro);
	newArray.forEach(function (value, index, array) {
		sis += value + ' ';
	});
	return sis;
}
let colFn = fName('much');
document.getElementById('div6').innerHTML = colFn;
console.log(colFn);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const newVowels = function (vowel) {
	let getVoil = '', upper = '', newArray = '';
	vowel.forEach(function (value) {
		getVoil += value;
	});
	upper = getVoil.toUpperCase();
	newArray = Array.from(upper);
	return newArray.concat(vowel);
}
const callVowels = newVowels(vowels)
const countVowels = function (sentence) {
	let vowel = '';
	const letter = Array.from(sentence);
	let vewLetter = letter.filter(function (value, index, array) {
		return array.indexOf(value) === index;
	});
	vewLetter.forEach(function (value, index, array) {
		if (callVowels.includes(value)) {
			vowel += value + ' ';
		};
	});
	return vowel;
}
var getVowels = countVowels('much'); //find out vowels 
document.getElementById('div7').innerHTML = 'Vowel ' + getVowels;
function date(dd, yy) {
	let day = '', year = '';
	/* //let days = 30, months = '', years = ''; */
	for (d = 0; d <= dd; d++) {
		day += `<option value="${d}" >${d}</option>`;
	}
	// const mm = ['jan', 'feb', 'Mar'];
	// mm.forEach(function (value, index, array) {
	// 	month += value;
	// 	console.log(month);
	// })
	for (y = 2000; y <= yy; y++) {
		year += `<option value= "${y}" >${y}</option>`;
	}
	return day + year;
	//return day;
	//console.log(day);
}
//date(30, 2010);
document.getElementById('div7').innerHTML = date(30, 2012);

/* get time function use and get month */
let datetime = new Date();
let days = ['sun', 'Mon', 'tues', 'we', 'Th', 'fri', 'sany'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[datetime.getMonth()]);
console.log(days[datetime.getDay()]);
console.log(datetime.getHours());
/* end */