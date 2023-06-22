// console.log("Hello Onramp")

// const y = 2.5
// const x = "Boris Johnson"
// const w = false
// let f;
// let s = null

// const x = 5
// console.log("type of y =", typeof y)
// console.log("type of x =", typeof x)
// console.log("type of w =", typeof w)
// console.log("type of f =", typeof f)
// console.log("type of s =", typeof s)

// console.log("hello world");

function display() {
    const dateOfBirth = document.querySelector(".dob").value;
    console.log(dateOfBirth);
}


// document.getElementById('dob').value = "2023-02-20"

// Primitive data types
// numbers
// strings
// Boolean
// null
// undefined

Array
let myArr = ["John", "Joe", "Mary", 2, 4]
// console.log(myArr[0])
// console.log(myArr[myArr.length - 1])
// unshift array method
// console.log(myArr)

// myArr.unshift('Joy')
// console.log(myArr)

// console.log([...myArr, 'joy'])

const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];
// console.log("before slicing", cities)
// const newCities = cities.slice(2)
// console.log("after slicing", newCities)


// const startEndOption = cities.slice(2, 4)
// console.log("start and end options", startEndOption)

// splice() array method
// const months = ['Jan', 'March', 'April', 'June'];
// console.log("original array", months)
// months.splice(1,0,"Feb")
// console.log("splice with three param", months)
// months.splice(4, 0, "May")
// console.log("adding may",months) 

// looping through an array
const numbers = [   1,2,3,4,5,6,7,8,9,10]


// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 3 === 0){
//         console.log(numbers[i])
//     }
// }

const myString = "osakpolor"
// console.log(myString.toUpperCase())

function addition(){
    let addNum = 4+3
    return addNum
}