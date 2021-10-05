const lista = function () {
    var aprovados = [
        {candidato: "Renata Soares", nota: 7.8, idade:29},
        {candidato: "Marcos Teixeira", nota: 7.8, idade:26},
        {candidato: "Priscila Gomes", nota: 7.8, idade:30},
        {candidato: "João Oliveira", nota: 7.8, idade:27},
        {candidato: "Adriana Telles", nota: 7.8, idade:28},
    ]
    aprovados.forEach( (valor, posicao) => {
        if(aprovados[posicao].idade >= 28 && aprovados[posicao].idade <= 30) {
            console.log(aprovados[posicao])
        }
    })
}
lista()