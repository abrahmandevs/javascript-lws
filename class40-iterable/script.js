// while loop spacial use
/* 
Iterables are iterable objects (like Arrays).
Iterables can be accessed with simple and efficient code.
Iterables can be iterated over with for..of loops

Iterating over a String
Iterating over an Array
*/
const fruits = ["apple", "banana", "chile", "papaya", "pinapal", "orange", "mango"]

let i = "0",
	count = ""
while (i < fruits.length) {
	count += `<li>${fruits[i]}</li>`
	i++
	document.getElementById("div1").innerHTML = count + "While loop"
}
do {
	count += `<li>${fruits[i]}</li>`
	i++
	document.getElementById("div2").innerHTML = count + "Do While loop"
} while (i < fruits.length)
