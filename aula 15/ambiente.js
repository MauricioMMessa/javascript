let num = [1 , 5 , 6, 9 , 3]
num[5] = 8
num.push(4)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor na posição 0 é ${num[0]}`)
console.log(`O vetor em ordem crescente ${num.sort()}`)

let pos = num.indexOf(8)
//let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
