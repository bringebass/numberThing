// import { test } from './test.js'

// test()

// class User {
//   constructor(userName, Password) {
//     this.name = userName
//     this.name2 = Password
//   }
//   sayName() {
//     console.log(this.name)
//   }

//   static test() {
//     console.log('hei hei hei')
//   }
// }

function getNumber() {
  let enteredNumber = parseInt(prompt('write a number between 1 and 10'))
  if (enteredNumber >= 10) {
    alert('you entered a too high number')
  }
  return enteredNumber
}

function checkNumber(randomNumber, enteredNumber) {
  console.log(`randomNumber: ${randomNumber}, enteredNumber: ${enteredNumber}`)
  if (enteredNumber < randomNumber) {
    console.log('the number you guessed was to low')
  } else if (enteredNumber > randomNumber) {
    console.log('the number you guessed was too high')
  }
}

function executeProgram() {
  let randomNumber = createRandomNumber()
  let enteredNumber = getNumber()
  checkNumber(randomNumber, enteredNumber)
}

function createRandomNumber() {
  let randomNumber = Math.random() * 10
  return parseInt(randomNumber)
}

executeProgram()
