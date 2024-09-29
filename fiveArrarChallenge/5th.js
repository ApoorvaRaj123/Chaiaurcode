// write a 'for' loop that multiplies each element in an array [2,4,6] by 2 and stores the result in a new array named 'multipliedNumbers'.

let array = [2,4,6];

let multipliedNumbers = [];

for (let i = 0; i < 3; i++) {
    let num = i*2;
    multipliedNumbers.push(num);
}