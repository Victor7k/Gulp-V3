"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro; // Como Carro implementa Vendavel então ele pode ser passado como parametro.
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
