//Primitives: number, string, boolean
//More complex: arrays, objects
//Function types, parameters

//Primitives
// * number, string... must be start with lowercase

let age: number;
age = 12.2;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//if we using null, we'll get error
let hobbies: null;
hobbies = 12;

//More complex
let favoriets: string[];

favoriets = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

//this is getting error
person = {
  isEmployee: true,
};

let people: {
  name: string;
  age: number;
}[];

//Type inference
let course: string = "React-The complete guide";
course = 12345;

let course: string | number | boolean = "React-The complete guide";
course = 12345;
