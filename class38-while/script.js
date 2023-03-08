// while loop spacial use
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
