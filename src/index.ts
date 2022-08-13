let i: number = 5;

console.log(i);

// basic types
let j: string = "hello";
let k: boolean = true;
let a: any = "world";

a = false;

let nums: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, 2, "ehllow", true];

//TUPLE

let mytup: [number, boolean, string] = [1, true, "hello"];

// tuple array

let mytuparr: [number, boolean][];

mytuparr = [
  [1, true],
  [2, false],
  [3, true],
];

console.log(mytuparr);

// UNION
let n: string | number;
n = 22;
n = "hello";

// OBJECTS
type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "vedant",
};

// FUNCTIONS

function myfunc(x: number, y: number): number {
  return x + y;
}

// return void
function myfunc2(x: string | number): void {
  console.log(x);
}
