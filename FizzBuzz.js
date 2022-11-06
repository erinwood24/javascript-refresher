let numFizzBuzz = 0
let i = 1
while (numFizzBuzz != 687) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
        numFizzBuzz++
    }else if (i % 5 == 0) {
        console.log('Buzz')
    }else if (i % 3 == 0) {
        console.log('Fizz')
    }else{
        console.log(i)
    }
    i++
}
