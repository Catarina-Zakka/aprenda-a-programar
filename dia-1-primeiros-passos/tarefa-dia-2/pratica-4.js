//Dados informados pelo cliente: 

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

// Esse programa será para calcular de forma automatica os impostos de cada produto conforme vendido
// Sendo 12% de imposto em produtos nacionais e 20% internacionais

let inter = 1.20
let nac = 1.12
// Declarei as várivaves nacionais e internacionais 

// construção do código Produto A:

if (produtoA.internacional == true) {
console.log("Valor do produto (internacional) com impostos: " + inter*produtoA.valor)
} else {
console.log("Valor do produto (nacional) com impostos: "+nac*produtoA.valor)    
}

// Construção do código Produto b:

if (produtoB.internacional == true) {
console.log("Valor do produto (internacional) com impostos;" + inter*produtoB.valor)    
} else {
    console.log("Valor do produto (nacional) com impostos:" + nac*produtoB.valor)
}

// Contrução do código Produto C:

if (produtoC.internacional = false) {
    console.log("Valor do Produto (internacional) com impostos:" + inter*produtoC.valor)
} else {
    console.log("Valor do produto (nacional) com impostos:" + nac*produtoC.valor)
}

//fim
