const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const newArr = (arr) => {
    const arrModified = arr.map((itens, index) => {
        const firstLetter = itens.slice(0,1).toUpperCase()
        const wholeWord = itens.slice(1).toLowerCase()
        return `${index} - ${firstLetter}${wholeWord}`
    })

    console.log(arrModified)
}


newArr(frutas)