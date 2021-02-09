function verif_img(x, y, z) {
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

    libera(x, y, z)
}

function libera(x, y, z) {
    if (x.parentElement.classList.contains('done')) {} else {
        certos = document.getElementsByClassName('certo').length
        errados = document.getElementsByClassName('errado').length
        if (certos == y && errados == z) {
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
        // window.scrollTo(0, x.offsetTop - 400)
    npis = document.getElementsByClassName('mord').length
    for (i = 0; i < npis; i++) {
        pis = document.getElementsByClassName('mord')[i]
        pis.innerHTML = pis.innerHTML.replace('π', '<text style="font-family: Symbol;">&#x3C0</text>');
    }
}

function escolheu(x) {
    if (x.parentElement.classList.contains('certo')) {} else {

        if (x.classList.contains('escolhido')) {
            x.classList.remove('escolhido')
        } else {
            sele = document.getElementsByClassName('escolhido').length
            for (i = 0; i < sele; i++) {
                document.getElementsByClassName('escolhido')[i].classList.remove('escolhido')
            }
            x.classList.add('escolhido')
            if (x.classList.contains('ce')) {
                x.classList.add('me-acertou')
                x.innerHTML = x.innerHTML + '<i class="fas fa-check"></i>'
                x.classList.remove('ce')
                x.parentElement.classList.add('certo')
                completo(x)

            } else {
                if (!x.classList.contains('me-errou')) {
                    x.innerHTML = x.innerHTML + '<i class="fas fa-times-circle"></i>'
                    x.classList.add('me-errou')
                }
            }
        }
    }
}