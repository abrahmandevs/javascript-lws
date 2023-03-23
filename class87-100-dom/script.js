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
console.log(notds.nodeName);
console.log(notds.nextSibling);
console.log(notds.parentNode);



