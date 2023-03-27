/*
BOM
*/
//window object
let open;
let width = document.getElementById('width')
let height = document.getElementById('height')
let closeWindow = document.getElementById('closeWindow')
let openWindow = document.getElementById('openWindow')

width.innerHTML = `window inner width ${window.innerWidth}`
height.innerHTML = `window inner height ${window.innerHeight}`


openWindow.addEventListener('click', () => {
    open = window.open('https://github.com/ARRahman73')
})
closeWindow.addEventListener('click', () => {
    open.close()
})
//window screen object

let widthScreen = document.getElementById('widthScreen')
let heightScreen = document.getElementById('heightScreen')

widthScreen.innerHTML = `window inner width ${screen.pixelDepth}`
heightScreen.innerHTML = `window inner height ${window.innerHeight}`

//window history object
let back = document.getElementById('back')
let go = document.getElementById('go')

back.addEventListener('click', () => {
    window.history.back()
})
go.addEventListener('click', () => {
    window.history.forward()
})
//window box object
let txt;
let message = document.getElementById('message')
let alert = document.getElementById('alert')
let confirm = document.getElementById('confirm')
let prompt = document.getElementById('prompt')

alert.addEventListener('click', () => {
    window.alert('haha masage');
    if (true) {
        message.innerHTML = `alert `
    }
})
confirm.addEventListener('click', () => {
    prompt("Please enter your name", "Harry Potter");
    /* var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt; */
})

//window Timeout object

let timeCount;
let intervelCount;
let x = '';
let setTime = document.getElementById('setTime')
let stopTime = document.getElementById('stopTime')
let setIntervel = document.getElementById('setIntervel')
let stopIntervel = document.getElementById('stopIntervel')

setTime.addEventListener('click', () => {
    timeCount = setTimeout(() => {
        message.innerHTML = `set time function start`
    }, 1000);
});
stopTime.addEventListener('click', () => {
    clearTimeout(timeCount)
    message.innerHTML = `Stop Timeout function`

});
setIntervel.addEventListener('click', () => {
    intervelCount = setInterval(() => {
        message.innerHTML = `set intervel function start ${x++}`
    }, 1000);
})
stopIntervel.addEventListener('click', () => {
    clearInterval(intervelCount);
    message.innerHTML = `Stop intervel function`
})