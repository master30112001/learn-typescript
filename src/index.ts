let i: number = 5;

// console.log(i);

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

// console.log(mytuparr);

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

// Interfaces

// Question mark means the property is optional
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user2: UserInterface = {
  id: 1,
  name: "vedant",
};

// using interfaces with functions

// here we are setting the parameter and return type format
interface mathfunc {
  (x: number, y: number): number;
}

// mathfunc will check if the myadd function has same parameter and return type format
const myadd: mathfunc = (x: number, y: number): number => {
  return x + y;
};

const mysub: mathfunc = (x: number, y: number): number => {
  return x - y;
};

// Classes

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const vedant = new Person(1, "vedant");

// console.log(vedant);
