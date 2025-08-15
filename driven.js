let numeroCartas ="";

let carta1 =" ";

let carta2 =" ";

let paraClique = "";


const listaDeImagens = [
    "assets/bobrossparrot.gif", 
    "assets/bobrossparrot.gif",
    "assets/fiestaparrot.gif", 
    "assets/metalparrot.gif",
    "assets/revertitparrot.gif",
    "assets/tripletsparrot.gif",
    "assets/unicornparrot.gif"]
 
function numeroDeCartas() {

    numeroCartas = Number(prompt("Qual o número de cartas?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {

        numeroCartas = Number(prompt("Qual o número de cartas?"));

    }

}
    
numeroDeCartas();
    

function criaCarta() {

    const carta = document.querySelector(".principal");

    let contador = 0;

    while (contador < numeroCartas && contador < listaDeImagens.length) {

        const cartas = `
        <div class="card">
            <div class="front-face face">
                <img src="assets/back.png">
            </div>
            <div class="back-face face">
                 <img src=${listaDeImagens[contador]}>
            </div>
        </div>`;

        carta.innerHTML += cartas;

        contador++;

    }


}

criaCarta();

function clickCarta(){

    document.querySelectorAll('.card').forEach(card => {

        card.addEventListener('click', () => {

            card.classList.add('flip');

            let cartaClicada =  this.classList.add("flip");

            carta1 = document.querySelector(".back-face img").src;

            carta2 = document.querySelector(".back-face img").src;

            if(carta1 === " "){

                carta1 = cartaClicada;

            }

            if(carta2 === " "){

                carta2 = cartaClicada;

            }

            if (carta1 !== carta2){

                cartaClicada =  this.classList.remove("flip");

            }
            

        });
        

    });

}

clickCarta();