const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];


  const getFirstLetter = nomes.filter(name => name[0] === 'a' || name[0] === 'A')

  console.log(getFirstLetter)