function reverse(str) {
    return str.split('').reverse().join('')
}

const reverse2 = str => str.split('').reverse().join('')
const reverse3 = str => [...str].reverse().join('')

function reverse4(str) {
    let arr = []
    for (let i = str.length-1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr
}
console.log(reverse("Reverse String"))
console.log(reverse2("Reverse String"))
console.log(reverse3("Reverse String"))
console.log(reverse4("Reverse String"))