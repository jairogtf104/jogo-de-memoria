

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


window.onload = numeroDeCartas;

function clicado(elemento){
    
    let li = document.querySelector("li");
    
    li.classList.add("hover");

}