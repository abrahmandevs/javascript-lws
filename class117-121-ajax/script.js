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
        container.innerHTML = this.responseText;
        console.log(this.getResponseHeader('last-modified')); // just spacefic info 
        //console.log(this.getAllResponseHeaders()); // get all header info 
    }

    // prepair request;
    xhr.open('GET', 'data/data.txt', true);// 3th parameter sync/async default async

    //xhr.setRequestHeader('name', 'Rahman');
    // sent data
    xhr.send()
});
