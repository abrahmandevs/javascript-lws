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


