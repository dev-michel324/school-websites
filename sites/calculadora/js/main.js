calc = ''

function button(id) {
    if (id == 'ac') {
        erase()
    } else if (id == 'del') {
        calc = calc.substr(0, (calc.length - 1))
        document.getElementById('current').innerText = calc
    } else if (id == 'x') {
        calc += '*'
        document.getElementById('current').innerText = calc
    } else {
        calc += id
        document.getElementById('current').innerText = calc
    }
}

function result() {
    r = eval(calc)
    calc = r
    document.getElementById('current').innerText = calc
}

function erase() {
    calc = ''
    document.getElementById('current').innerText = calc
}