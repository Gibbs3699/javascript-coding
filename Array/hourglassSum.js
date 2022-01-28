//hourglassSum
//https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true

function hourglassSum(arr) {
    let maxArray = -63
    let sumArray = 0
    for (let i = 0; i <= 3 ; i++){
        for (let j = 0; j <= 3 ; j++){
            sumArray = arr[i][j] + arr[i][j+1] + arr[i][j+2]
            sumArray += arr[i+1][j+1]
            sumArray += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            
            maxArray = maxArray > sumArray ? maxArray : sumArray
        }
    }
    return maxArray
}
