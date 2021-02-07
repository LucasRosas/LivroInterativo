function verif_img(x) {
    if (x.classList.contains('ce')) {
        x.innerHTML = '<img src="img/ce.png">'
        x.classList.add('certo')

    } else {
        if (x.classList.contains('active')) {
            x.classList.remove('active')
            x.classList.remove('errado')
            x.innerHTML = ''
        } else {
            x.classList.add('active')
            x.classList.add('errado')
            x.innerHTML = '<img src="img/er.png">'
        }
    }

    libera(x)
}

function libera(x) {
    if (x.parentElement.classList.contains('done')) {} else {
        certos = document.getElementsByClassName('certo').length
        errados = document.getElementsByClassName('errado').length
        if (certos == 2 && errados == 0) {
            x.parentElement.classList.add('done')
            completo()
        }
    }
}

function completo() {
    x = document.getElementsByClassName('incompleto')[0]
    x.classList.remove('incompleto')
    x.classList.add('completo')
    x.classList.remove('atual')
    x = document.getElementsByClassName('incompleto')[0]
    x.style.display = 'block'
    x.classList.add('atual')
    window.scrollTo(0, x.offsetTop - 300)
    npis = document.getElementsByClassName('mord').length
    for (i = 0; i < npis; i++) {
        pis = document.getElementsByClassName('mord')[i]
        pis.innerHTML = pis.innerHTML.replace('π', '<text style="font-family: Symbol;">&#x3C0</text>');
    }
}