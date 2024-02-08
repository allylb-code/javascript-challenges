
function minMax (arr) {
    let newArr = [];
    let maxNum = Math.max.apply(null, arr);
    console.log('-----');
    console.log(maxNum);
    console.log('-----');
    newArr.push(maxNum);
    let minNum = Math.min(arr);
    newArr.unshift(minNum);
    return newArr;
}

var num = [4,5,1,3];
console.log(Math.max.apply(null, num));

// function minMax(arr) {
//     arr.sort();
//     maxNum = arr(size)
// }
// let arrOne = [1, 2, 3, 4, 5];
// console.log(Math.max.(arrOne));

// console.log(minMax(2334454, 5));

console.log(minMax(1));