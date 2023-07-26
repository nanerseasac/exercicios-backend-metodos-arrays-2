const numeros = [0, 122, 4, 6, 7, 8, 44]

const isEven = (arr) => {
    const verificator = arr.every(number => number % 2 === 0)

    if(verificator) {
        console.log('array válido')
    }else {
        console.log('array inválido')
    }
} 

isEven(numeros)