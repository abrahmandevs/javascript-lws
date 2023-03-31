/*
    functions
*/
// class72 functin defenitions
let ano = function (a) { // anonymuch functions or it not host
    //console.log(a)
}
ano('thing');

(function (b) { // self invoking function // iffe functions
    //console.log(b)
})(55);

const c = (a) => { //arrow function dont cary this not hosted , 
    console.log(arguments.length) //function agruments objects
}
// class73 functin paremeters
//  premetin valau pass value copy and dont chenge value
//  object pass refarande and change referance value

// class74 functin invocation
// myfunct()  invocation
// new myfunct() invocation
// obj.a()  invocation
let arrowfun = function () { //arrow function dont cary this not hosted , 
    //console.log(this);
    let obj = {
        a: function () {
            //console.log(this);
        }
    }
    obj.a() // function call by obj that is invocation
}
arrowfun()

// class75 functin .call()
let person = {
    fullName: function (city, country) {
        return this.firstName + ' live in ' + city + ' ' + country;
    }
}
let person1 = {
    firstName: 'Rahman'
}
let perso2 = {
    firstName: 'Robin'
}
console.log(person.fullName.call(person1, 'Dhaka', 'bangladesh')) // function call by obj that is invocation

// class76 functin .apply()
let people = {
    fullName: function (city, country) {
        return this.firstName + ' live in ' + city + ' ' + country;
    }
}
let people1 = {
    firstName: 'Rahman'
}
let people2 = {
    firstName: 'Robin'
}
console.log(people.fullName.apply(people1, ['Dhaka', 'bangladesh'])); // function call by obj that is invocation
Math.max.apply(null, [1, 2, 3]);

// class77 functin closures

var button = document.getElementById("btnCount");
count = 0;
button.onclick = () => {
    count += 1;
    document.getElementById("counter").innerHTML = count;
};
// higher order function
function calfunc(x) {
    document.getElementById("div1").innerHTML = (x * x);
}
function higherOrder(v, callBack) {
    callBack(v);
}
higherOrder(5, calfunc);

// callback function and higher order function
// using callback we can make our code non blocking

/*
const printSquare = (x) => {
  console.log(`The square is ${x * x}`);
};
const square = printSquare;
square(10);
const higherOrderFunction = (y, callback) => {
  callback(y);
};
higherOrderFunction(5, square);
*/

// event handlers are good example of callback functions , they will allow delay
// document.getElementById('button').addEventListener('click', () => {
//     //item clicked
//   })

// window.addEventListener('load', () => {
//     //window loaded
//     //do what you want
//   })

// setTimeout(() => {
//     // runs after 2 seconds
//   }, 2000)

const taskOne = (callback) => {
    console.log(`Task 1`);
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log(`Task 2`);
        callback();
    }, 2000);
};

const taskThree = (callback) => {
    console.log(`Task 3`);
    callback();
};
const taskFour = (callback) => {
    console.log(`Task 4`);
    callback();
};

// taskOne(function t1() {
//   taskTwo(function t2() {
//     taskThree(function t3() {
//       taskFour();
//     });
//   });
// });
taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                higherOrder(5, calfunc);
            });
        });
    });
});