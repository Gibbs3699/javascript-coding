// Reverse Array
// https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true#!

function reverseArray(a) {
    let arr = []
    for (let i = a.length-1; i >= 0; i--) {
        arr.push(a[i])
    }
    return arr
}

console.log(reverseArray[1 ,4 ,3 ,2])