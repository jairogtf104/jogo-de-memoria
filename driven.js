let numeroCartas ="";

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

    while (contador < numeroCartas) {

        const cartas = `
        <div class="card">
            <div class="front-face face">
                <img src="assets/back.png">
            </div>
            <div class="back-face face">
                <img src="assets/unicornparrot.gif">
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

        });

    });

}

clickCarta();

function embalharaLista(){

    let c = 0;

    let verso = document.querySelector(".back-face");

    while(c < listaDeImagens.length){

        let cartaVerso = `
        <div class="card">
            <div class="front-face face">
                <img src="assets/back.png">
            </div>
            <div class="back-face face">
                <img src=${listaDeImagens[c]}>
            </div>`;

            verso.innerHTML += cartaVerso;
        
    c++;
}

    minhaArray.sort(comparador); 

    function comparador() { 
        return Math.random() - 0.5; 
    }

}

embalharaLista();
