function calcular() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let items = document.createElement('option')
            let res = n * c
            items.text = `${n} x ${c} = ${res}`
            items.value = `tab${c}`
            tab.appendChild(items)
            c += 1
        }
    }

}