/*
API
*/
//FORM API
let open;
let userName = document.getElementById('userName')
let submitBtn = document.getElementById('submitBtn')
let mess = document.getElementById('mess')
submitBtn.addEventListener('click', () => {
    // debugger;
    console.log(common(userName));
    function common(user) {
        if (userName.value == '') {
            return mess.innerHTML = `Require value`;
        }
        if (userName.value.length < 2 || userName.value.length > 9) {
            return mess.innerHTML = `will be 2-10 value`;
        }
    }
})
//  storage api
let fetchData = document.getElementById('fetchData')
let display = document.getElementById('display')
fetchData.addEventListener('click', function () {
    fetch("http://127.0.0.1:5500/class110-106-apis/fetch.txt")
        .then((res) => res.text()).then((data) => {
            display.innerText = data;
        });
    /* .then(function (res) {
        res.text()
    })
    .then(function (data) {
        display.innerText = data;
    }) 
    */

});
async function getData() {
    const res = await fetch("http://127.0.0.1:5500/class110-106-apis/fetch.txt");
    const data = await res.text();
    display.innerText = data;
}
// user location
let locationMess = document.getElementById('locationMess');
let getLocation = document.getElementById('getLocation');
getLocation.addEventListener('click', () => {

    //setInterval(() => {
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        locationMess.innerHTML = 'empty'
    }
    function showPosition(position) {
        let date = new Date(position.timestamp);
        locationMess.innerHTML = `Latitude: ${position.coords.latitude} <br>Longitude :  ${position.coords.longitude} <br>Longitude :  ${date.toLocaleString('en-US')}`;
    }
    //}, 1000);
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                locationMess.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                locationMess.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                locationMess.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                locationMess.innerHTML = "An unknown error occurred."
                break;
        }
    }
});
/* 
const timestamp = new Date().getTime();
console.log(timestamp); // 👉️ 1673598370158

const date = new Date(timestamp);
console.log(date); // 👉️ Fri Jan 13 2023 10:26:10

console.log(date.toString()); // 👉️ "Fri Jan 13 2023 10:26:10"

 ---------------------------------------------------------

👇️ Format date and time using different locales
console.log(date.toLocaleString('en-US')); // 👉️ "1/20/2022, 9:50:15 AM"
console.log(date.toLocaleString('en-GB')); // 👉️ "20/01/2022 09:50:15"
console.log(date.toLocaleString('sv')); // 👉️ "2022-01-20 09:50:15"

 👇️ Display only the date
console.log(date.toLocaleDateString('en-US')); // 👉️ "1/20/2022"

 👇️ Display only the time
console.log(date.toLocaleTimeString('en-US')); // 👉️ "9:50:15 AM"
*/


