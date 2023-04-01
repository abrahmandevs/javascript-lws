
/* let stat = true;
//promises definition
const promises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (stat) {
            resolve('task 2')
        } else {
            reject('fail')
        }
    }, 2000);
});

//promises call
promises
    .then(function (value) {
        document.getElementById('div6').innerHTML = value;
    })
    .catch(function (err) {
        document.getElementById('div6').innerHTML = err;
    })

 */
//
const paymentSuccess = true;
const marks = 90;

function enroll() {
    document.getElementById('div3').innerHTML = 'enroll ....';
    const promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve()
            } else {
                reject('invalid payment')
            }
        }, 2000);
    });
    return promises;
}
function progress() {
    document.getElementById('div4').innerHTML = 'progress ....';

    const promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve()
            } else {
                reject('you could not get enought marks')
            }
        }, 2000);
    });
    return promises;
}
function getCertificate() {
    document.getElementById('div5').innerHTML = 'preparing your certificate';

    const promises = new Promise(function (resolve) {
        setTimeout(function () {
            resolve = 'you could not get enought marks';
        }, 1000);
    });
    return promises;
}

/* enroll()// get reurn promises 
    .then(progress) // enroll promises need parameter 'resolve'
    .then(getCertificate) // enroll->progress promises need parameter 'resolve'
    .then(function (value) { // enroll->progress->getCertificate return promises parameter 'resolve' for this need call function
        document.getElementById('div6').innerHTML = value;
    })
    .catch(function (err) {
        document.getElementById('div6').innerHTML = err;
    }) */
// class 85 async await 
async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        document.getElementById('div6').innerHTML = message;
    } catch (err) {
        document.getElementById('div6').innerHTML = err;
    }
}
course();
// promis
/* const promis1 = new Promise((resolve, reject) => {
    let complitePromise = true;
    if (complitePromise) {
        resolve('task 1 is resolve');
    } else {
        reject(new Error('this task is reject'));
    }
});
//console.log(promis1);
promis1.then((res) => { // if promise true
    //console.log(res);
})
    .catch((err) => { // if promise failed
        //console.log(err.message);
    });

const promis2 = new Promise((resolve, reject) => {
    resolve('resove promise 2');
});
promis2.then((res) => {
    //console.log(res);
}) 
// distructer
Promise.all([promis1, promis2]).then(([res1, res2]) => { // distructer policy
    console.log(res1, res2);
}) */

//raice // distructer policy
const promis1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resove promise 1');
    }, 3000);
});
const promis2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resove promise 2');
    }, 2000);
});
const promis3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resove promise 3');
    }, 1000);
});
Promise.race([promis1, promis2, promis3]).
    then((res) => { // show res which promise quick resolve that is race win
        console.log(res);
    });