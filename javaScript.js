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

const button = document.querySelector('.button')
const main = document.querySelector('.main')
const formContainer = document.querySelector('.form_container')
const formButton = document.querySelector('.form_button')
const form = document.querySelector('.form')

let myLibrary = []

function Books(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(...args) {
  myLibrary.push(...args)
  doIt()
}

function buttonClicked(param) {
  main.removeChild(main.children[param])
  myLibrary.splice(param, 1)
  console.log(myLibrary)
}

function doIt() {
  main.innerHTML = ''
  myLibrary.forEach((item, index) => {
    let element = document.createElement('div')
    element.className = 'yoyo'
    element.innerHTML = `<div><h1>BOOK</h1> Title: ${item.title} </br> Author: ${item.author} </br> Pages: ${item.pages} </br>  <button onclick="buttonClicked(${index})">Try it</button> </div>`
    main.appendChild(element)
  })
}

button.addEventListener('click', () => {
  formContainer.classList.toggle('show')
})

formButton.addEventListener('click', event => {
  event.preventDefault()
  let book = {
    title: form.title.value,
    author: form.author.value,
    pages: form.pages.value,
  }
  addBookToLibrary(book)
  form.title.value = ''
  form.author.value = ''
  form.pages.value = ''
})

function removeFunc() {
  console.log('test')
}
