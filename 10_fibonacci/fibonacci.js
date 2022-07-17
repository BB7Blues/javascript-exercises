const fibonacci = function(a) {
    const failed = "OOPS";
    const fibonacciArray = [1,1];
    if (a < 0) return failed;
    for(let i = 2; i <= a; i++){
    
        let precced1 = fibonacciArray[i - 1];
        let precced2 = fibonacciArray[i - 2];
        fibonacciArray.push(precced1 + precced2);
    
    }
    console.log(fibonacciArray);
    return fibonacciArray[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
