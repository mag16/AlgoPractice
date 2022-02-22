// rewrite function in fat arrow format
const addFive = function (num) {
    return num + 5;
}

//arrow function
const plusFive = (num) => { return num + 5; }

//arrow function with implict return
const plusFiveArrowImplicit = num => num + 5;

//using .map method on an array
const array = [1, 2, 3, 4, 5]

const mappedArr = array.map(x => x + 1);
console.log(mappedArr);