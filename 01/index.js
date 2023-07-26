const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia']

const nomeDoLivro = "Dom Quixote"

const getIndex = (arr, book) => {
    const index = arr.findIndex((item) => item === book)
    return index + 1
}

console.log(getIndex(livros, nomeDoLivro))