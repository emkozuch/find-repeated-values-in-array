const array = [1, 2, 3, 4, 1, 5, 5, 6, 7, 8, 9, 1]


let repeatedNumbers
let firstRepeated
let numbersBeforeRepeated = []

array.some(number => {
    if (!numbersBeforeRepeated.includes(number)) {
        numbersBeforeRepeated.push(number)
        return false
    } else {
        firstRepeated = number
        return true
    }
})
repeatedNumbers = array.filter(number => {
    return  number === firstRepeated
})

console.log(`First repeated number is ${firstRepeated}, and it repeats ${repeatedNumbers.length} times`)
