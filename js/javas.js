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
            completo(1)
        }
    }
}

function completo(n) {
    n = parseInt(n) + 1
    localStorage.setItem('etapa', n)
    document.getElementById('s' + n).style.display = "block"

    // x = document.getElementsByClassName('incompleto')[0]
    // x.classList.remove('incompleto')
    // x.classList.add('completo')
    // x.classList.remove('atual')
    // x = document.getElementsByClassName('incompleto')[0]
    // x.style.display = 'block'
    // x.classList.add('atual')
    // window.scrollTo(0, x.offsetTop - 400)
    npis = document.getElementsByClassName('mord').length
    for (i = 0; i < npis; i++) {
        pis = document.getElementsByClassName('mord')[i]
        pis.innerHTML = pis.innerHTML.replace('π', '<text style="font-family: Symbol;">&#x3C0</text>');
    }
}

function continua() {
    a = parseInt(localStorage.getItem('etapa'))
    if (1 < a) {
        completo(1)
    }
    if (2 < a) {
        completo(2)
    }
    if (3 < a) {
        completo(3)
    }
    if (4 < a) {
        completo(4)
    }
    if (5 < a) {
        completo(5)
    }
    if (6 < a) {
        completo(6)
    }
    if (7 < a) {
        completo(7)
        completo(8)
        completo(9)
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
                n = parseInt(localStorage.setItem('ponto', n)) + 1
                completo(n)

            } else {
                if (!x.classList.contains('me-errou')) {
                    x.innerHTML = x.innerHTML + '<i class="fas fa-times-circle"></i>'
                    x.classList.add('me-errou')
                }
            }
        }
    }
}

function resol(x) {
    y = document.getElementById('resol')
    y.innerHTML = `<img src="img/reso${x}.png"><div id="close" onclick="fecha()"><i class="far fa-times-circle"></i></div>`
    y.style.display = 'block'
}

function fecha() {
    y = document.getElementById('resol').style.display = 'none'
}

function mostratudo() {
    sele = document.getElementsByClassName('incompleto').length
    for (i = 0; i < sele; i++) {
        document.getElementsByClassName('incompleto')[0].classList.remove('incompleto')
    }
}

function verifica(x) {
    var litros = Number(document.getElementById('ano').value);
    if (litros == 765) {
        x.classList.remove('errou')
        document.getElementById('ano').style.display = 'none';
        document.getElementById('ano').nextElementSibling.style.display = 'inline';
        document.getElementById('ano').nextElementSibling.textContent = litros;
        x.innerHTML = 'Certo!'
    } else {
        document.getElementById('ano').style.backgroundColor = 'darkred';

    }
}

function altura() {

    let alturaf = document.documentElement.clientHeight
    let altura = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    a = window.pageYOffset
    b = altura - alturaf + 1
    c = 100 * a / 14915
    document.getElementById('linha').style.width = c + '%'
}




window.onscroll = function() { altura() };

function def(x) {
    document.getElementsByClassName('boxdef')[x].style.display = 'block'
    var pageX = event.pageX + 20;
    var pageY = event.pageY - window.pageYOffset;
    document.getElementsByClassName('boxdef')[x].style.left = pageX + 'px'
    document.getElementsByClassName('boxdef')[x].style.top = pageY + 'px'


}

function outdef() {
    sele = document.getElementsByClassName('boxdef').length
    for (i = 0; i < sele; i++) {
        document.getElementsByClassName('boxdef')[i].style.display = 'none'
    }

}


function resetar() {
    localStorage.setItem('etapa', 1)
    document.location.reload(true);
}