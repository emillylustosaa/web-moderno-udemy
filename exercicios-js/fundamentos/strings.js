const escola = "Cod3r"

console.log(escola.charAt(4)) // pegar um determinado caracteri
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // pegar o código
console.log(escola.indexOf('3')) // índice do caracteri

console.log(escola.substring(1)) // chamadas
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!")) //string concatenando com var e concatenando com outra string
console.log('Escola' + escola + "!")
console.log('3' + 2) // String ganha
console.log(escola.replace(3, 'e')) //


console.log('Ana,Maria,Pedro'.split(','))