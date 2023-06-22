
// write a function that take an array
// of number and strings
// return only items in the 
// array that are number
const myArr = [2, 20, 56, "elias", 2, "fish", 44, false, "salt"]

function onlyNum(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.unshift(arr[i])
        }
    }
    return newArr
}
// console.log(onlyNum(myArr))  

function filterArr(arr) {
    return arr.filter((item) => typeof item === 'number')
}

// using arrow function
// const filterArr = arr => {
//     return arr.filter((item) => typeof item === 'number')
// }
// console.log(filterArr(myArr))

// sort method of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit1 = ["25", "100", "30", "300"];
Number(fruit1);
const sortA = fruits.sort();
const sortReverse = sortA.reverse()
console.log(sortA)

// sort with argument
const sortB = fruits.sort((a, b) => b - a)
// console.log("sort b", sortB) 
