let nome1 = "ana"
let nome2 = "bob"
let nome3 = "carlos"
let nomes = ["ana", "bob", "carlos"]
let nomes2 = [nome1, nome2, nome3]
console.log(nomes)
console.log(nomes[0])
console.table(nomes) // Vai fazer uma tabela no console do array (MUITO INTERESSANTE)
nomes[1] = "maria" // altera os dados daquele elemento

// ------------------------------------------------------------------

console.log(nomes.length) // printa o tamanho do array
nomes.push("x") // Adiciona um elemento no final do array
nomes.unshift("y") // Adiciona no início do array
nomes.shift() // Remove elemento do início
nomes.pop() // Remove elemento do fim
// Da para guardar elementos removidos dentro de variáveis
nomes.splice(1,2,"joaquim","manuel","rui") // 1 é o indíce para iniciar, 2 é a quantidade removida e o resto é elementos que quero adicionar
