let button = document.querySelectorAll('button')
let team = true
let value = 0
let end = false

let casa = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function apertou(e) {
    if (team){
        text = 'X'
        value = 1
    } else {
        text = 'O'
        value = 2
    }

    button[e].innerHTML = text
    casa[e] = value

    team = !team

    verificarVitoria()
}

function verificarVitoria() {
    // Vertical 1
    if (casa[0] == 1 && casa[1] == 1 && casa[2] == 1 || casa[0] == 2 && casa[1] == 2 && casa[2] == 2){
        win()
    } // vertical 2
    else   if (casa[3] == 1 && casa[4] == 1 && casa[5] == 1 || casa[3] == 2 && casa[4] == 2 && casa[5] == 2){
        win()
    } // vertical 3
    else   if (casa[6] == 1 && casa[7] == 1 && casa[8] == 1 || casa[6] == 2 && casa[7] == 2 && casa[8] == 2){
        win()
    } // horizonta 1
    else   if (casa[0] == 1 && casa[3] == 1 && casa[6] == 1 || casa[0] == 2 && casa[3] == 2 && casa[6] == 2){
        win()
    }  // horizonta 2
    else   if (casa[1] == 1 && casa[4] == 1 && casa[7] == 1 || casa[1] == 2 && casa[4] == 2 && casa[7] == 2){
        win()
    } // horizonta 3
    else   if (casa[2] == 1 && casa[5] == 1 && casa[8] == 1 || casa[2] == 2 && casa[5] == 2 && casa[8] == 2){
        win()
    } // diagonal 1
    else   if (casa[0] == 1 && casa[4] == 1 && casa[8] == 1 || casa[0] == 2 && casa[4] == 2 && casa[8] == 2){
        win()
    } // diagonal 2
    else   if (casa[2] == 1 && casa[4] == 1 && casa[6] == 1 || casa[2] == 2 && casa[4] == 2 && casa[6] == 2){
        win()
    }
}

function endScreen(p){
    const fundo = document.getElementById('fundo') 
    const menu = document.getElementById('menu')
    const msg = document.querySelector('span')
    
    if (!team){
        msg.innerHTML = 'X'
    } else {
        msg.innerHTML = 'O'
    }
    
    team = true
    fundo.style.display = 'block'
    menu.style.display = 'flex'

    setTimeout(desligar, 5000);
}

function win() {
    casa = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    if(!team){endScreen(true)} else {endScreen(false)}

    for(let i = 0; i < button.length; i++){
        button[i].innerHTML = ''

        let team = true
        let value = 0
    }
}

function desligar (){
    fundo.style.display = 'none'
    menu.style.display = 'none'
}