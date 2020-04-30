let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let butoes = document.querySelectorAll('#butoes');
let message = document.querySelector('#message');
let messageP = document.querySelector('#message p');
let segundoJogador;
let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener("click", function(){

         let vez;

        if(player1 == player2){
            vez = x;
        }else{
            vez = o;
        }

        if(this.childNodes.length == 0){

            let clonevez = vez.cloneNode(true);
            this.appendChild(clonevez);
    
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }
            
        }
       checarCondicoes();
        
    });
} 
function checarCondicoes(){
    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');
    
    //Horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0  ){
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x'){
            declarandoVencedor('x');
        }else if(b1child == 'o' && b2child == 'o' && b3child == 'o'){
            declarandoVencedor('o');
        }
    }
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0  ){
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x'){
            declarandoVencedor('x');
        }else if(b4child == 'o' && b5child == 'o' && b6child == 'o'){
            declarandoVencedor('o');
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0  ){
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x'){
            declarandoVencedor('x');
        }else if(b7child == 'o' && b8child == 'o' && b9child == 'o'){
            declarandoVencedor('o');
        }
    }
    //Vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0  ){
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == 'x' && b4child == 'x' && b7child == 'x'){
            declarandoVencedor('x');
        }else if(b1child == 'o' && b4child == 'o' && b7child == 'o'){
            declarandoVencedor('o');
        }
    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0  ){
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == 'x' && b5child == 'x' && b8child == 'x'){
            declarandoVencedor('x');
        }else if(b2child == 'o' && b5child == 'o' && b8child == 'o'){
            declarandoVencedor('o');
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0  ){
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == 'x' && b6child == 'x' && b9child == 'x'){
            declarandoVencedor('x');
        }else if(b3child == 'o' && b6child == 'o' && b9child == 'o'){
            declarandoVencedor('o');
        }
    }
    //Diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0  ){
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == 'x' && b5child == 'x' && b9child == 'x'){
            declarandoVencedor('x');
        }else if(b1child == 'o' && b5child == 'o' && b9child == 'o'){
            declarandoVencedor('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0  ){
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b3child == 'x' && b5child == 'x' && b7child == 'x'){
            declarandoVencedor('x');
        }else if(b3child == 'o' && b5child == 'o' && b7child == 'o'){
            declarandoVencedor('o');
        }
    }

    //Deu velha
    let cont = 0;
    for (let i = 0; i< boxes.length; i++){
        if (boxes[i].childNodes[0] != undefined){
            cont++;
        }
    }
    if(cont == 9){
        declarandoVencedor('v');
    }

                
}

function declarandoVencedor(vencedor){
    let scorex = document.querySelector('.xx-scoreboard');
    let scoreo = document.querySelector('.oo-scoreboard');
    let msg = '';
    if (vencedor == 'x'){
        scorex.textContent = parseInt(scorex.textContent) + 1;
        msg = 'O jogador 1 venceu';
    }else if( vencedor == 'o'){
        scoreo.textContent = parseInt(scoreo.textContent) + 1;
        msg = 'O jogador 2 venceu';
    }else{
        msg = 'Deu velha!!';
    }

    // exibir vencedor por mensagem
    messageP.innerHTML = msg;
    message.classList.remove('hide');

    setTimeout(function(){
        message.classList.add('hide');
    },3000);

    player1 = 0;
    player2 = 0;

    // removendo x e bolas
    let = removerBoxes = document.querySelectorAll('.box div');
    for(let i = 0; i < removerBoxes.length; i++){
        removerBoxes[i].parentNode.removeChild(removerBoxes[i]);
    }
}