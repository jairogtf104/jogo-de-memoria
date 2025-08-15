let numeroCartas ="";

let carta1 =" ";

let carta2 =" ";

let imagem2 =" ";

let paraClique = "";


const listaDeImagens = [
    "assets/bobrossparrot.gif", 
    "assets/explodyparrot.gif",
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

            this.classList.add("flip");

            carta1 = card;

            carta2 = card;

            imagem1 = carta1.querySelector(".back-face img").src;

            imagem2 = carta2.querySelector(".back-face img").src;


            if(imagem1 === imagem2){

               alert("iguais");

            }

        });
        

    });

}

clickCarta();