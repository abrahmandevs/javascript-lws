
let convertNumberSystem = (function (convert, numberFormat, convertFormat) {
	let converted = parseInt(convert, numberFormat).toString(convertFormat);
	return converted;
})('f', 16, 8);
document.write(convertNumberSystem)
document.write('<br>')
document.write((9).toString(2))