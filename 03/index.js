const palavras = ["arroz", "feijão", "carne", "macarrão"];

const verifyItens = (itens) => {
	const verificator = itens.some(item => item === "cerveja" || item === "vodka");
	if (verificator) {
		console.log("revise sua lista, joão. possui bebida com venda proibida!");
	} else {
		console.log("tudo certo, vamos as compras!");
	}
};

verifyItens(palavras);
