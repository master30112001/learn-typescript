"use strict";
let i = 5;
// console.log(i);
// basic types
let j = "hello";
let k = true;
let a = "world";
a = false;
let nums = [1, 2, 3, 4, 5];
let arr = [1, 2, "ehllow", true];
//TUPLE
let mytup = [1, true, "hello"];
// tuple array
let mytuparr;
mytuparr = [
    [1, true],
    [2, false],
    [3, true],
];
// console.log(mytuparr);
// UNION
let n;
n = 22;
n = "hello";
const user1 = {
    id: 1,
    name: "vedant",
};
// FUNCTIONS
function myfunc(x, y) {
    return x + y;
}
// return void
function myfunc2(x) {
    console.log(x);
}
const user2 = {
    id: 1,
    name: "vedant",
};
// mathfunc will check if the myadd function has same parameter and return type format
const myadd = (x, y) => {
    return x + y;
};
const mysub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const vedant = new Person(1, "vedant");
console.log(vedant.register());
