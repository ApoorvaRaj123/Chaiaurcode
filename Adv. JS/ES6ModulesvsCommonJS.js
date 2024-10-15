export function add(a,b) {
    return a+b;
}

export function subtract(a,b) {
    return a-b;
}

export default function multiply(a,b) {
    return a*b;
}


// default import

import multiply from "./mathOperationsM"

// named import

import {add, subtract} from "./mathOperations.js"

console.log(multiply(2,2));
console.log(add(2,3));
