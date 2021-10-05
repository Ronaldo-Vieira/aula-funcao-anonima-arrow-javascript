const seta = (data, mes) => {
    if(data < 1 || data > 30 ) {
        return "Impossivel essa data existir"
    }
    
    if (data >= 21 && mes == "março" || data <= 20 && mes == "abril") {
    
        return "Áries"
    
    } else if (data >= 21 && mes == "abril" || data <= 20 && mes == "maio") {
    
        return "Touro"
    
    } else if (data >= 21 && mes == "maio" || data <= 20 && mes == "junho") {
    
        return "Gêmeos"
    
    } else if (data >= 21 && mes == "junho" || data <= 22 && mes == "julho") {
    
        return "Câncer"
    
    } else if (data >= 23 && mes == "julho" || data <= 22 && mes == "agosto") {
    
        return "Leão"
    
    } else if (data >= 23 && mes == "agosto" || data <= 22 && mes == "setembro") {
    
        return "Virgem"
    
    } else if (data >= 23 && mes == "setembro" || data <= 22 && mes == "outrubro") {
    
        return "Libra"
    
    } else if (data >= 23 && mes == "outubro" || data <= 21 && mes == "novembro") {
        
        return "Escorpião"
    
    } else if (data >= 22 && mes == "novembro" || data <= 21 && mes == "dezembro") {
        
        return "Sagitário"

    } else if (data >= 22 && mes == "dezembro" || data <= 19 && mes == "janeiro") {
    
        return "Capricórnio"
    
    } else if (data >= 20 && mes == "janeiro" || data <= 18 && mes == "fevereiro") {
    
        return "Aquário"
    
    } else if (data >= 19 && mes == "fevereiro" || data <= 20 && mes == "março") {
     
        return "Peixes"
    
    }

}
console.log(seta(30, "setembro"))