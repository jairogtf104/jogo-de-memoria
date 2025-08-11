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

        numeroCartas = Number(prompt("Digite um número PAR entre 4 e 14:"));

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

criaCarta ();

