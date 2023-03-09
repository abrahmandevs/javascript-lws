/// comparison 
let age = 8;

if (age < 14) {
    document.getElementById('div1').innerHTML = `children Your age is ${age}`;
} else if (age >= 14 && age < 18) {
    document.getElementById('div1').innerHTML = `Young Your age is ${age}`;
} else if (age >= 18) {
    document.getElementById('div1').innerHTML = `older Your age is ${age}`;
}
// this is a tenary operator
document.getElementById('div2').innerHTML = age < 14 ? `children age is ${age}` : age >= 14 && age < 18 ? ` young age is ${age}` : age >= 18 ? `older age is ${age}` : `inter valid age`;

// check a numbe or not by if else
let number = Number('33');
if (isNaN(number)) {
    document.getElementById('div3').innerHTML = `It is not a Number ${number}`;
} else {
    document.getElementById('div3').innerHTML = `Gret your age is ${number}`;
}
// check a numbe or not by tenary
document.getElementById('div4').innerHTML = isNaN(number) ? `It is not a Number ${number}` : `Gret your age is ${number}`;
const arrayFn = function (age) {
    return age > 5 ? 'good job' : 'Fail';
}
console.log(arrayFn(4));
console.log('2' > '12')
{
    let age, num = 12;
    age = Number(num);
    if (isNaN(age)) {
        console.log("Input is not a number");
    } else {
        console.log((age < 18) ? "Too young" : "Old enough");
    }
}