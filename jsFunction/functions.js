"use strict"

// function createIdNumber() {
//     // let random = Math.ceil( Math.random() * 30 )
//     let topRange = 30
//     let random = Math.floor( Math.random() * (topRange + 1) )
//     let idNumber = random * 24
//     console.log(idNumber)
// }

// createIdNumber()

// const age22 = 20
// function getAge(age, name){
//     console.log(age, name)
// }
// getAge(30, "dor")

function multiplyAndCheck (num = 3){
    let multiplied = num * num;
    if(multiplied % 2 == 0){
        return "even"
    }else if(multiplied%2 !== 0 && multiplied===9){
        return "fizz buzz"
    }else{
        return "odd"
    }
}

// console.log(multiplyAndCheck())
// console.log(multiplyAndCheck(5))
// let newMult = multiplyAndCheck(22)
// console.log(newMult)

//fizz buzz game
// create a function fizzBuzz
// it will accept an argument num
// if num is divisible by 3 console.log "fizz"
// if num is divisible by 5 console.log "buzz"
// if num is divisible by 3 and 5 console.log "fizz buzz"

function fizzBuzz(num){
    if(num%3 === 0 && num%5 === 0){
        console.log("fizz buzz")
    }else if(num%5 === 0){
        console.log('buzz')
    }else if(num%3 === 0){
        console.log('fizz')
    }else{
        console.log(num)
    }
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(277)
fizzBuzz(7)