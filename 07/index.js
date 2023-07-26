const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

const getLocation = (addresses, cep) => {
    const findLocation = addresses.find((address) => address.cep === cep)
    return findLocation
} 

console.log(getLocation(endereços, 00222444))




  // Octal literals are not allowed. Use the syntax '0o111222'.ts(1121)