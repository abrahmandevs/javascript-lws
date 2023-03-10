/*

*/

let text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text); // convert json to object

document.getElementById('div1').innerHTML = '';
for (x = 0; x < obj.employees.length; x++) {
	for (let y in obj.employees[x]) {
		document.getElementById('div1').innerHTML += `${obj.employees[x][y]} <br>`;
	}
}

let makeObj = {
	name: 'rahman', age: 20, height: 5.5
}
let newJson = JSON.stringify(makeObj);// convert object to json
console.log(obj)
console.log(newJson)

