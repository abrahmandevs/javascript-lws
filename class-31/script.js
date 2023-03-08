/* ludu kahla random  */
function getRndomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndomNumber(1, 6));

// alphabetically
const students = ['dewan', 'shagor', 'rahmna', 'sharif'];
console.log(students.sort());
// number serial
const rollNumber = [2, 5, 6, 7, 78, 8, 84];
console.log(rollNumber.sort(function (a, b) {
	return a - b;
}));
// leap year
function isLeapYear(year) {
	if (year % 400 == 0 || ((year % 4 === 0) && (year % 100 !== 0))) {
		console.log(`${year} is a leap year`)
	} else {
		console.log(`${year} is not a leap year`)
	}
}
isLeapYear(2024)
// how many vowel in sentence
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowels(sentence) {
	let count = 0;
	let letter = '';
	const letters = Array.from(sentence);
	letters.forEach(function (value, index, array) {
		if (vowels.includes(value)) {
			count++
			letter += letters[index]
		}
	})
	return count + letter;
}
console.log(countVowels('rahman is a nad  boy'));
// duplicate find
const numbers = [11, 3, 4, 54, 5, 56, 7, 7, 87, 8, 8, 3, 3, 2, 2, 11];
const duplicates = numbers.filter(function (value, index, array) {
	return array.indexOf(value) !== index;
})
console.log(duplicates);
const unicque = numbers.filter(function (value, index, array) {
	return array.indexOf(value) === index;
})
console.log(unicque);
