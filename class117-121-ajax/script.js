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
// response and request
function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        // create a new request;
        const xhr = new XMLHttpRequest();

        // what to do when request arrive
        xhr.onload = function () {
            // console.log(JSON.parse(this.responseText).userId);
            // console.log(this.response);
            // handle application error
            if (this.status >= 400) {
                reject(`there was an application error and response status is ${this.status} and response text is ${this.statusText}`);
            } else {
                resolve(this.response)
            }
        }
        xhr.onerror = function () {
            reject("there was an error");
        }

        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send(data);
    });
    return promise;
}
function get() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then((responseData) => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
}
function sent() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })).then((responseData) => {
        console.log(responseData);
    });
}


let getData = document.getElementById('getData');
let sentData = document.getElementById('sentData');


getData.addEventListener('click', get);
sentData.addEventListener('click', sent);
