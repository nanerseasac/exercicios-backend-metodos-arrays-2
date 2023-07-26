const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]


const citiesLessThan8 = (cities) => {
    const cityFilter = cities.filter(city => city.length < 9)
    return cityFilter.join(', ')
}

console.log(citiesLessThan8(cidades))