// Ciclo WHILE -> executa o que estiver dentro, enquanto...
let valor = 0
while (valor < 10) {
    console.log(valor)
    valor++
}

// Ciclo DO... While -> O primeiro ciclo é sempre executado porque ELE SÓ NO FINAL VAI AVALIAR A CONDIÇÃO

do {
    console.log(valor)
    valor++
} while(valor<10)

/*

for(iniciação; condição; incremento) {
    código a executar
}

*/
    
for(let valor1 = 0; valor1 < 10; valor1++){ // Define um "temporizador" dentro do loop
    console.log(valor)
}

// Ciclo FOR... in (Não vai funcionar corretamente assim porque apresenta chaves) (é mais funcional em objetos)

let valores = [1,2,3,4,5]
for(valor in valores){ // valor é cada ÍNDICE do array, pode ser i também
    console.log(valor) // Isso aqui vai printar 0,1,2,3,4
}

// Ciclo FOR... of (esse sim vai apresentar os valores dos arrays)
let nomes = ["ana", "bob", "joaquim"]
for(nome of nomes){
    console.log(nome)
}

// Ciclo FOREACH

nomes.forEach((n) => console.log(n)) // É basicamente o for of porém com arrow function

