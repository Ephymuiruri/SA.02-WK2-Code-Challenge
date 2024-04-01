function arrayMath (num1,num2){
    const array = []
    if (num1<=num2){
    for (let i = num1;i<=num2;i++){
          array.push(i)
    }
}
    else {
        for (let i = num1;i>=num2;i--){
            array.push(i)
        }
    }
    console.log(array)
    return array
}
arrayMath(13,11)