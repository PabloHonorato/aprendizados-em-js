function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')    
    var masc = document.getElementById('mass')
    var fem = document.getElementById('fem')
    
  

    if(fano.value == 0 || fano.value > ano ) {
        window.alert(' [ERRO]verifique os dados novamente!')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      img.width = img.width+250;
      img.height = img.height+250;
      if(fsex[0].checked) {
          gênero = 'Homem'
          if(idade >= 0 && idade < 10){
              //criança
              img.setAttribute('src', 'foto-criança-m.png')
          }else if(idade < 21){
              //jovem
              img.setAttribute('src', 'foto-jovem-m.png')
          }else if (idade < 50){
              //adulto
              img.setAttribute('src', 'foto-adulto-m.png')
          }else{
              //idoso
              img.setAttribute('src', 'foto-idoso-m.png')
          }
      }else if (fsex[1].checked){
          gênero = 'mulher'
          if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-criança-f.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-f.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        }else{
            //idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${gênero} com ${idade} anos`
      res.appendChild(img)
    }
}
