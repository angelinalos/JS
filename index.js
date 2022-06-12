// Lesson 33
const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  },
]

// 1. Получить средний возраст пользователей.

const age = users.map((user) => {
  return user.age
})

let ageSum = age.reduce(function (sum, el) {
  return sum + el
}, 0)

let avarageAge = ageSum / age.length

// 2. Отсортировать массив по возрасту от большего к меньшему.

let sorted = users.sort((a, b) => a.age - b.age)

// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста.

let question = prompt("Guess the age")

function checkAge(number){
    for(let value of age){
        if(value == number){
            return true
        } 
    }
    return false
}
checkAge(question)

// HW_33

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1. Создать строку из названий предметов написаных через запятую

let subject = Object.keys(subjects)
console.log(subject)

// 2. Посчитать общее количнство студентов и учителей на всех предметах

let sum = 0;
for(let key in subjects){
    let a = subjects[key]
    for(teach in a){
         sum += a[teach]
    }

}
console.log(sum)

//3. Получить среднее количество студентов на всех пердметах


//4. Создать массив из объектов предметов

let newArr = []
for(let keys in subjects){
    newArr.push(subjects[keys])
}
console.log(newArr)

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let sortedByTeach = newArr.sort((a, b) => a.teachers - b.teachers)
console.log(sortedByTeach)