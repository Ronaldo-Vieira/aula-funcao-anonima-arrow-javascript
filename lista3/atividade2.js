const repeteco = function (frase) {
    var recepitor = []
    for(var x = 0; x <= 36; x++) {
        recepitor.unshift(frase)
    }
    return recepitor
}
console.log(repeteco("ola"))