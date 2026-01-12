let valor = 10
let valor2 = "10"
if (valor == valor2) { // Isso vai comparar apenas o valor, se forem diferentes o js converte o que for diferente
    console.log("o valor é igual")
}
if (valor === valor2) { // Isso não vai converter, no caso aqui seria falso, pois o tipo tem que ser igual
    console.log("o valor é igual")
}
// Operadores lógicos
/*
Condição A && Condição B      Verdadeiro de ambas forem verdadeiras
Condição A || Condição B      Verdadeiro de uma for verdadeira
!Condição A                   Verdadeiro de A for falso -> Está perguntando se é falso
*/