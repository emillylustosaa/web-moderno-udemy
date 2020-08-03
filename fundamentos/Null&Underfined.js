let valor // não inicializar 
console.log(valor) // -> underfined 

valor = null // ausência de valor 
console.log(valor) // -> null
// console.log(valor.toString) // -> Erro!

const prodtuo = {}
console.log(produto.preco) // -> underfined 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined 
console.log(!!pronduto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log (!!produto.preco)
console.log(produto)

