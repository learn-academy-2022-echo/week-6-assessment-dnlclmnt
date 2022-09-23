// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceFun", () => {
  const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("takes in an array of objects and returns an array with a sentence about each person with the name capitalized", () => {
      expect(sentenceFun(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// RED FAIL  ./jest.test.js
// sentenceFun
//   ✕ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (1 ms)

// ● sentenceFun › takes in an array of objects and returns an array with a sentence about each person with the name capitalized

//   ReferenceError: sentenceFun is not defined


// b) Create the function that makes the test pass.

  //Create a function that will take in an array of objects. Each object will have a name and occupation key. The value of each key-value pair will be a string.
  // Create an empty result array since the return will be an array of strings
  //Iterate over array
  // At each index, access each object's keys. Each person object in our array will be represented as arr[i]
      //Name key must be capitalized on every first letter of the name. 
          // We can accomplish this by splitting our name into an array with a space as the separator. 
          // We will then use the map method on the split name array (an array consisting of a first name and a last name) to reassign each name to word[0].toUpperCase() + word.slice(1)
          // Lastly, we will use join method with a space separator to return a string, where every word in our string (first and last name) is capitalized on the first letter. The end result will look like "Firstname Lastname"
          // Use string interpolation to push "namekey is occupationkey." into our result array
  // Lastly return our result array


//   const sentenceFun = (arr) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let {name, occupation} = arr[i]
//         name = name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
//         result.push(`${name} is ${occupation}.`)
//     }
//     return result
//   }

// A refactor that will utilize the map method on the arr parameter, eliminating the need for a for loop and eliminating the need for us to push each string into a result array. This is all returned to us already with the map method. 
// We will use destructuring on the current object to access its name and occupation keys.

  const sentenceFun = (arr) => arr.map((curObj) => {
          let {name, occupation} = curObj
          name = name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
          return `${name} is ${occupation}.`
      })

//     PASS  ./jest.test.js
//     sentenceFun
//       ✓ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (28 ms)
    
  //   Test Suites: 1 passed, 1 total
  //   Tests:       1 passed, 1 total
  //   Snapshots:   0 total
  //   Time:        0.536 s, estimated 1 s
  

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("onlyRem", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3", () => {
      expect(onlyRem(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyRem(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//  RED FAIL  ./jest.test.js
//   sentenceFun
//     ✓ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (2 ms)
//   onlyRem
//     ✕ takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3 (1 ms)

//   ● onlyRem › takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3

//     ReferenceError: onlyRem is not defined

// b) Create the function that makes the test pass.

//Create a function that takes in an array. The return will be an array of the remainders of numbers divided by 3.
// Iterate over the array (we can accomplish this by using the filter/ map method)
  // On each item in the array we will use a conditional statement to check if the data type of the item is a number
      // If it is a number, we want to return that number % 3.
      // For our case, we'll call on the filter method to check that each item in the array has a number data type.
      // We'll then chain it with the map method to return the remainder of the number % 3


const onlyRem = (arr) => arr.filter((item) => typeof item === 'number').map((item) => item % 3)

// A manual way of accomplishing the same task without higher order functions

  // const onlyRem = (arr) => {
  //   let result = []
  //   for (let i = 0; i < arr.length; i++) {
  //       if (typeof arr[i] === 'number') {
  //           result.push(arr[i] % 3)
  //       }
  //   }
  //   return result
  // }

//   PASS  ./jest.test.js
//   sentenceFun
//     ✓ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (3 ms)
//   onlyRem
//     ✓ takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3 (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.555 s, estimated 1 s

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubeNums", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      expect(sumCubeNums(cubeAndSum1)).toEqual(99)
      expect(sumCubeNums(cubeAndSum2)).toEqual(1125)
  })
})

//  RED FAIL  ./jest.test.js
//   sentenceFun
//     ✓ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (3 ms)
//   onlyRem
//     ✓ takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3 (1 ms)
//   sumCubeNums
//     ✕ takes in an array of numbers and returns the sum of all the numbers cubed

//   ● sumCubeNums › takes in an array of numbers and returns the sum of all the numbers cubed

//     ReferenceError: sumCubeNums is not defined


// b) Create the function that makes the test pass.

//Create a function that takes in an array of numbers. The return will be the sum of all the numbers cubed
// Create a variable called sum that will be initialized to 0. On each value in the array, we'll add to the sum
// We can use the forEach method to go through every value in the array instead of using a for loop
  // Reassign sum to sum + the current value ** 3
// Return the sum

const sumCubeNums = (arr) => {
  let sum = 0
  arr.forEach(num => {
      sum += num ** 3
  });
  return sum
}

// PASS  ./jest.test.js
// sentenceFun
//   ✓ takes in an array of objects and returns an array with a sentence about each person with the name capitalized (5 ms)
// onlyRem
//   ✓ takes in a mixed data array and returns an array of only the remainders of numbers when divided by 3 (1 ms)
// sumCubeNums
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.726 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.29s.
