let valores = [9, 1 ,7 ,4, 2, 8]

for (pos = 0 ; pos < valores.length ; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(' ')

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
   