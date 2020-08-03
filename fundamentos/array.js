const valores = [7.7, 8.9, 6.3, 9.2] // dados dinâmicos
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // forma de acessar a parte do índice
console.log(valores)
console.log(valores.length) // quantidade de elementos

valores.push({id: 3}, false, null, 'teste') // mistura de dados
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array
delete valores[0] 
console.log(valores)

console.log(typeof valores) 