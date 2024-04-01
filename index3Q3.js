const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primeCheck (num) {
    if (num < 2){
        return `${num} is not a prime number`
    }
    const limit = num**(1/2)
    for (let i = 2;i <=limit;i++ ){
        if (num % i === 0){
         return (`${num} is not a prime number`)}
    }
    primeNo.push(num)
    return `${num} is a prime number`
}

const primeNo = []

function loopThrough (array){
  for (let no of array){
         primeCheck(no)
    }
}

loopThrough(numArray)
console.log(primeNo)
