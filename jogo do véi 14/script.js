let button = document.querySelectorAll('button')
let value = 0
let end = false
let rng = 10

let casa = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function apertou(e) {
    if (casa[e] == 0){
    button[e].innerHTML = 'X'
    value = 1
    casa[e] = value


    if (!verificarVitoria()){
        gerarPos()
    }
}
}

function verificarVitoria() {
    // Vertical 1
    if (casa[0] == 1 && casa[1] == 1 && casa[2] == 1 || casa[0] == 2 && casa[1] == 2 && casa[2] == 2){
        endScreen()
        return true
    } // vertical 2
    else   if (casa[3] == 1 && casa[4] == 1 && casa[5] == 1 || casa[3] == 2 && casa[4] == 2 && casa[5] == 2){
        endScreen()
        return true
    } // vertical 3
    else   if (casa[6] == 1 && casa[7] == 1 && casa[8] == 1 || casa[6] == 2 && casa[7] == 2 && casa[8] == 2){
        endScreen()
    } // horizonta 1
    else   if (casa[0] == 1 && casa[3] == 1 && casa[6] == 1 || casa[0] == 2 && casa[3] == 2 && casa[6] == 2){
        endScreen()
        return true
    }  // horizonta 2
    else   if (casa[1] == 1 && casa[4] == 1 && casa[7] == 1 || casa[1] == 2 && casa[4] == 2 && casa[7] == 2){
        endScreen()
        return true
    } // horizonta 3
    else   if (casa[2] == 1 && casa[5] == 1 && casa[8] == 1 || casa[2] == 2 && casa[5] == 2 && casa[8] == 2){
        endScreen()
        return true
    } // diagonal 1
    else   if (casa[0] == 1 && casa[4] == 1 && casa[8] == 1 || casa[0] == 2 && casa[4] == 2 && casa[8] == 2){
        endScreen()
        return true
    } // diagonal 2
    else   if (casa[2] == 1 && casa[4] == 1 && casa[6] == 1 || casa[2] == 2 && casa[4] == 2 && casa[6] == 2){
        endScreen()
        return true
    } else {
        return false
    }
}

function endScreen(){
    const fundo = document.getElementById('fundo') 
    const menu = document.getElementById('menu')
    const msg = document.querySelector('span')
    
    if (value == 1){
        msg.innerHTML = 'X'
    } else {
        msg.innerHTML = 'O'
    }
    fundo.style.display = 'block'
    menu.style.display = 'flex'

    casa = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    
    for(let i = 0; i < button.length; i++){
        button[i].innerHTML = ''
        
    }
}

function desligar (){
    fundo.style.display = 'none'
    menu.style.display = 'none'
}

function jogadabot(){
   if ( casa[rng] == 0){
    button[rng].innerHTML = 'O'
    value = 2
    casa[rng] = value
    verificarVitoria()
    } else {
       gerarPos()
    }
}

function gerarPos(){
    rng = parseInt(Math.random() * 9)
    jogadabot()
}