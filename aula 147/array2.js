let nomes = ["joao", "ana", "carlos"]

let nomes_extraidos = nomes.slice[0,2] // Parte um array, corta a partir do zero, dois elementos, cria um novo array
console.table(nomes_extraidos)

let outros_nomes = ["joaquim", "carla", "manuel"]
nomes = nomes.concat(outros_nomes) // Junta um ou mais arrays a um array original -> pode ser por exemplo: outros_nomes, outros, outros1...

console.log(nomes.includes("carlos")) // Pergunta se o array tem o elemento -> boolean
console.log(nomes.indexOf("ana")) // Perugnta em que índice está um elemento

let todos_os_nomes = nomes.join("-") // Transforma um array em string através de um parâmetro dentro do () -> pode ser por exemplo " ", "|", "_"...