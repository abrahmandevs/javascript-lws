/// Switch 
let result = Number('0');

switch (true) {
	case (result >= 0 && result < 33):
		document.write('Fail');
		break;
	case (result >= 33 && result < 40):
		document.write('third');
		break;
	case (result >= 40 && result < 60):
		document.write('Secound');
		break;
	case (result >= 60 && result < 80):
		document.write('Frist');
		break;
	case (result >= 80 && result <= 100):
		document.write('Goldren Result');
		break;
	default:
		document.write('Input valid number')
}