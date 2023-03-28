/*
AJAX
*/
//AJAX
let open;
let loadData = document.getElementById('loadData')
let content = document.getElementById('content')
loadData.addEventListener('click', () => {
    // create a new request;
    const xhr = new XMLHttpRequest();
    // what to do when request arrive
    xhr.onload = function () {
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    }
    // prepair request;
    xhr.open('GET', 'data/data.txt');
    // sent data
    xhr.send()
});
