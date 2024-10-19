import { toUpperCase } from './stringModule.js';
import { findMax } from './arrayModule.js';

export function add (a, b) {
console.log("Answer is: " , a + b);
}

export function subtract (a, b) {
    console.log("Answer is: " , a - b);
    
}

export default function multiply(a, b) {
    console.log("Answer is: ", a * b);
    
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

export function multiplyArrayMax(arr) {
    
console.log("answer is: " , findMax * 1);

}