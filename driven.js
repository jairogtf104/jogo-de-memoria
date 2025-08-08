let lista = ["assets/back.png"]

/*[bobrossparrot.gif, explodyparrot.gif, fiestaparrot.gif, metalparrot.gif, revertitparrot.gif, tripletsparrot.gif, unicornparrot.gif ];*/

/*let numeroDasCartas =Number(prompt("qual o numero de cartas?"));
function numeroDeCartas() {

    numeroDasCartas = Number(prompt("qual o numero de cartas?"));

    while(numeroDasCartas % 2 !== 0){

        numeroDasCartas = Number(prompt("qual o numero de cartas?"));

        if(numeroDasCartas % 2 ===0 ){

            console.log("cartas");
        }

    }

}*/

function driven() {

    let lista = document.querySelectorAll("ul li");

    let contador = 0;

    while(contador < lista.length){

        const carta = `
            <li>
                <div class="carta" onclick="viraCarta1(this)"><img src="assests${lista}"></div>
            </li>
            `;

            lista.innerHTML;

        contador++;

    }
}

window.onload = numeroDeCartas;

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

function viraCarta12(elemento) {

    elemento.querySelector("img").src = "assets/tripletsparrot.gif";

}
