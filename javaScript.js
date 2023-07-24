// Construction function + static methods ----------------------

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

// User.test()

// let Theobald = new User('theo', '123')

// Theobald.sayName()

// ------------------------------------------------------------

// Getters and setters --------------------------------

// let anObject = {
//   name: 'Tom',
//   occupation: 'Truck-driver',
//   Born: 1991,
//   hobbies: ['drink', 'drive'],
//   get getHobbies() {
//     return this.hobbies[0]
//   },
//   set getHobbies(val) {
//     this.hobbies.unshift(val)
//   },
// }

// console.log(anObject.getHobbies)
// anObject.getHobbies = 'dance'
// console.log(anObject.getHobbies)
// console.log(anObject.hobbies)

// ----------------------------------------------------

// for (let i = 0; i < 10; i++) {
//   console.log(i)
//   for (let j = 0; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }

// ----------------- Add 100 to age - program --------------

// const button = document.querySelector('.button')
// const button2 = document.querySelector('.button2')
// const main = document.querySelector('.main')

// let arr = []

// function addNewPerson() {
//   let namez = document.getElementById('name').value
//   let person = {
//     name: namez,
//     lastName: 'toddy',
//     age: 10,
//   }

//   arr.push(person)
// }

// button.addEventListener('click', () => {
//   addNewPerson()
//   showArr()
// })

// function showArr() {
//   console.log(arr)
// }

// button2.addEventListener('click', () => {
//   updateArr()
// })

// function updateArr() {
//   arr = arr.map((user, index) => {
//     if (user.age >= 100) {
//       return { ...user, age: user.age }
//     } else return { ...user, age: user.age + 100 }
//   })

//   showArr()
// }

// ----------------------------------------------------

// ----------------- Alter objects in array according to index --------------

// let arr = [
//   {
//     name: 'theo',
//     age: 24,
//     verified: false,
//   },
//   {
//     name: 'stan',
//     age: 77,
//     verified: false,
//   },
//   {
//     name: 'jimmy',
//     age: 66,
//     verified: false,
//   },
// ]

// function showArr() {
//   console.log(arr)
// }

// function updateArray() {
//   arr = arr.map((item, index) => {
//     if (index % 2 == 0) {
//       return { ...item }
//     } else {
//       return { ...item, verified: true }
//     }
//   })
//   showArr()
// }

// button.addEventListener('click', updateArray)

// ----------------------------------------------------

// ---------fetch, push to array, change data in array------------------

// const button = document.querySelector('.button')
// const button2 = document.querySelector('.button2')
// const button3 = document.querySelector('.button3')
// const main = document.querySelector('.main')
// button.addEventListener('click', getUser)
// button2.addEventListener('click', doubleMoney)
// button3.addEventListener('click', filterFunc)

// users = []

// function getUser() {
//   fetch('https://randomuser.me/api').then(response => {
//     response.json().then(data => {
//       const user = data.results[0]
//       const newUser = {
//         gender: user.gender,
//         firstName: user.name.first,
//         lastName: user.name.last,
//         money: Math.floor(Math.random() * 10),
//       }
//       users.push(newUser)
//       updateDom()
//     })
//   })
// }

// function updateDom(providedData = users) {
//   main.innerHTML = '<h1>test</h1>'
//   providedData.forEach(user => {
//     const element = document.createElement('div')
//     element.innerHTML = `Name: ${user.firstName}, Money:${user.money}`
//     main.appendChild(element)
//   })
// }

// function doubleMoney() {
//   users = users.map(item => {
//     return { ...item, money: item.money * 2 }
//   })
//   updateDom()
// }

// function filterFunc() {
//   console.log(users)
//   users = users.filter(item => {
//     return item.money > 10
//   })
//   updateDom()
// }

// ----------------------------------------------------------

// let someArray = [
//   {
//     name: 'john',
//     age: 23,
//     driversLicense: true,
//   },
//   {
//     name: 'tim',
//     age: 43,
//     driversLicense: false,
//   },
//   {
//     name: 'jim',
//     age: 53,
//     driversLicense: true,
//   },
// ]

// someArray.forEach(item => {
//   console.log(item.age)
// })

// ----------------------------------------------------------

// ---------------------------------// Add book-program -------------------

// const button = document.querySelector('.button')
// const main = document.querySelector('.main')
// const formContainer = document.querySelector('.form_container')
// const formButton = document.querySelector('.form_button')
// const form = document.querySelector('.form')
// const toggleButton = document.getElementById('test')

// let myLibrary = []

// function Books(title, author, pages, status) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.status = status
// }

// Books.prototype.changeStatus = function () {
//   if (this.status === 'unread') {
//     this.status = 'read'
//   } else if (this.status === 'read') {
//     this.status = 'unread'
//   }
//   doIt()
// }

// function addBookToLibrary(...args) {
//   myLibrary.push(...args)
//   doIt(...args)
// }

// function buttonClicked(param) {
//   main.removeChild(main.children[param])
//   myLibrary.splice(param, 1)
// }

// function testo(index) {
//   myLibrary[index].changeStatus()
//   console.log(myLibrary[index])
// }

// function doIt() {
//   main.innerHTML = ''
//   myLibrary.forEach((item, index) => {
//     let element = document.createElement('div')
//     element.className = 'yoyo'
//     element.innerHTML = `<div><h1>BOOK</h1> Title: ${item.title} </br> Author: ${item.author} </br> Pages: ${item.pages} </br> <button class='testClass' onclick="buttonClicked(${index})">Delete book</button> </br> <button id=test onclick="testo(${index})">${item.status}</button> </div>`
//     main.appendChild(element)
//   })
// }

// button.addEventListener('click', () => {
//   formContainer.classList.toggle('show')
// })

// formButton.addEventListener('click', event => {
//   event.preventDefault()
//   let status = 'unread'
//   let book = new Books(form.title.value, form.author.value, form.pages.value, status)

//   addBookToLibrary(book)
//   form.title.value = ''
//   form.author.value = ''
//   form.pages.value = ''
// })

// ------------------------ end of add book program -----------------------------

// class Animal {
//   constructor(name, energy) {
//     this.name = name
//     this.energy = energy
//   }
//   eat(amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
//   sleep(length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
//   play(length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
//   static nextToEat(animals) {
//     const sortedByLeastEnergy = animals.sort((a, b) => {
//       return a.energy - b.energy
//     })

//     return sortedByLeastEnergy[0].name
//   }
// }

// console.dir(Function.prototype) // her accesser man prototype-objektet til objektet Function

// console.dir(Function.__proto__) // i dette tilfellet henviser Function til konstruktør-funksjonen Function, og ikke objektet Function. Man ser altså på .__prot__ attributten til konstruktør-funksjonen Function her (i nyere javaScript skrevet som [[Prototype]])

// console.dir(Function.__proto__ === Function.prototype) // grunnen til at dette returnerer 'true' er fordi begge deler peker til ett og samme objekt, dette er bare bestemt av utviklerne av javaScript

// recursion

// function powerOf(x, n) {
//   if (n === 1) {
//     return 10
//   }
//   return x * powerOf(x, n - 1)
// }

// let test = powerOf(2, 3)

// console.log(test)

// Forklaring: Intil n === 1 stackes bare funksjoner oppå hverandre i call stacken, uten å returnere noen verdi (fordi funksjonene ikke resolves). Deretter jobber callstacken seg nedover, og begynner å returne verdier. Den begynner på den siste funksjonen som ble kjørt, som er if-statementen (return-verdien til powerOf er da 10). Ettersom callstacken jobber seg nedover tar den alltid utgangspunkt i siste return-verdi fra powerOf. Første gang er return-verdien 10, deretter på 20 (x * 10), og deretter 40 (x * 20).

// recursion ferdig

// currying

// function curried(arg) {
//   return function inside(params) {
//     return arg + params
//   }
// }

// const plusFive = curried(5)

// console.log(plusFive(7))

// IIFE

// (function test() {
//   console.log('test 9t99t9t9t')
// })()

