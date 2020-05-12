function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    msg.innerHTML = `agora são ${hora}:${min} horas`

    if(hora >= 6 && hora < 12 ){
        //BOM DIA!
        img.src = '../img/manhapq.png'
        document.body.style.background = '#a0b0d3'
    }else if(hora >= 13 && hora < 18){
        //BOA TARDE!
        img.src = '../img/tardepq.png'
        document.body.style.background = '#d5955c'
    }else{
        //BOA NOITE!
        img.src = '../img/noitepq.png'
        document.body.style.background = '#01315f'
    }
}

