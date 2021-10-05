const seta = (num) => {
    if (num % 5 == 0 && num % 3 == 0) {
        return "JavaScript"
    } else if(num % 5 == 0) {
        return "Bora"
    } else if (num % 3 == 0) {
        return "Dale"
    }
}
console.log(seta(90))