const retorno = function () {
    var lista = []
    for(var x = 102; x <= 450; x++){
        if(x % 2 == 0) {
            lista.push(x)
        }
    }
    return lista
}
console.log(retorno())