function swapCase (string){
    const splitString = string.split('')
    const lettersArray = []
    for (let letter of splitString){
        if (letter === letter.toUpperCase()){
    const lowerLetter = letter.toLowerCase()
    lettersArray.push(lowerLetter)
     }
     else {
    const  upperLetter = letter.toUpperCase()
    lettersArray.push(upperLetter)
     }
    }
    const swapCased = lettersArray.join('')
    console.log(swapCased)
    return swapCased
}
swapCase('The Quick Brown Fox')