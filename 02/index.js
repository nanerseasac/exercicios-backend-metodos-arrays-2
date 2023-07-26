const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const getWord = (words) => {
    const moreThanFive = words.some((word) => word.length > 5)
    if(moreThanFive) {
        console.log('existe palavra inválida')
    }else{
        console.log('array validado')
    }
}

getWord(palavras)