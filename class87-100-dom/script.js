/*
DOM
*/
// animation
const p = document.querySelector('#div1');
p.style.color = 'red';
function animate() {
    const animate = document.getElementById('animate');
    let pos = 0;
    let setAne = setInterval(innerAne, 9);

    function innerAne() {
        if (pos <= window.innerHeight) {
            pos++;
            animate.style.top = pos + 'px';
            animate.style.left = pos + 'px';
        } else {
            pos = 0;
            clearInterval(setAne);
        }
    }
}
animate()

console.log(window.innerHeight);
console.log();

// eventsListner
window.addEventListener("scroll", function () {
    scrollAmount = window.scrollY;
    document.getElementById('div5').innerHTML = scrollAmount;
});
// mom navigation
const notds = document.getElementById('div4');
const btn = document.getElementById('next');

var x = '';
btn.addEventListener('click', function () {
    if (x <= notds.childNodes.length && x != null) {
        x++
    } else {
        x = 0;
    }
    console.log(notds.childNodes[x]);
});
let b = notds.childNodes.length;
console.log(notds.parentNode);
console.log(notds.childNodes[0].nextElementSibling);
//console.log(notds.firstChild.nextElementSibling);
//console.log(notds.lastChild);
//console.log(notds.nextSibling);
//console.log(notds.previousSibling);
const para = document.createElement("p")//make p tag
const node = document.createTextNode("hello Text node welcome") // make tags valu
para.appendChild(node) // <p>hello Text node welcome</p>
const elemen = document.getElementById("div4");
const nam = document.getElementById("name2");
elemen.appendChild(para);
elemen.insertBefore(para, nam)


