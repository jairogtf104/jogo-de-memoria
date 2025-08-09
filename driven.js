const ul = 
["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"]

function numeroDeCartas() {

    numeroDasCartas = Number(prompt("qual o numero de cartas?"));

    while(numeroDasCartas % 2 !== 0){

        numeroDasCartas = Number(prompt("qual o numero de cartas?"));

        if(numeroDasCartas % 2 ===0 ){

            console.log(numeroDasCartas);

        }

    }

}
    
window.onload = numeroDeCartas;

function criaCarta (elemento){

    let contador = 0;

    while(contador < ul.length){

        let img = ul[contador];

        let imagem = `     

        <li>                

            <div class="carta" onclick="viraCarta1(this)"><img src="assets/back.png"></div>    

        </li>`

        contador++;

    }

}

window.onload = criaCarta;
/*

function viraCarta1(elemento){
    
    elemento.querySelector("img").src = "assets/bobrossparrot.gif";

}

function viraCarta2(elemento){
    
    elemento.querySelector("img").src = "assets/explodyparrot.gif";


}

function viraCarta3(elemento){
    
    elemento.querySelector("img").src = "assets/fiestaparrot.gif";

}

function viraCarta4(elemento){

    elemento.querySelector("img").src = "assets/metalparrot.gif";

}

function viraCarta5(elemento){
    
    elemento.querySelector("img").src = "assets/revertitparrot.gif";

}

function viraCarta6(elemento){
    
    elemento.querySelector("img").src = "assets/tripletsparrot.gif";

}

function viraCarta7(elemento){
    
    elemento.querySelector("img").src = "assets/bobrossparrot.gif";

}

function viraCarta8(elemento){
    
    elemento.querySelector("img").src = "assets/explodyparrot.gif";

}

function viraCarta9(elemento){
     
    elemento.querySelector("img").src = "assets/fiestaparrot.gif";

}

function viraCarta10(elemento){
    
    elemento.querySelector("img").src = "assets/metalparrot.gif";


}

function viraCarta11(elemento){
    
    elemento.querySelector("img").src = "assets/revertitparrot.gif";

}

function viraCarta12(elemento){

    elemento.querySelector("img").src = "assets/tripletsparrot.gif";

    alert(FileList.length);

}*/