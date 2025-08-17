let numeroCartas ="";

let carta1 = null;

let carta2 = null;

let travar = false;

let imagem2 =" ";

let paraClique = "";

let jogadas = 0;

let paresEncontrados = 0;

const listaDeImagens = [
    "assets/bobrossparrot.gif", 
    "assets/explodyparrot.gif",
    "assets/fiestaparrot.gif", 
    "assets/metalparrot.gif",
    "assets/revertitparrot.gif",
    "assets/tripletsparrot.gif",
    "assets/unicornparrot.gif"]
 
listaDeImagens.sort(embaralha);

function embaralha(){

    return Math.random() - 0.5; 

}

function numeroDeCartas() {

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {

        numeroCartas = Number(prompt("Qual o número de cartas?"));

    }

}
    
numeroDeCartas();

function cartas() {

  let metade = numeroCartas / 2;

  let selecionadas = listaDeImagens.slice(0, metade);

  let pares = [...selecionadas, ...selecionadas];

  pares.sort(() => Math.random() - 0.5); 

  return pares;

}

function criaCarta() {

  const container = document.querySelector(".principal");

  let imagens = cartas();

  imagens.forEach(img => {

    const cartaHTML = `
      <div class="card">
        <div class="front-face face">
          <img src="assets/back.png">
        </div>
        <div class="back-face face">
          <img src="${img}">
        </div>
      </div>
    `;
    container.innerHTML += cartaHTML;

  });
}

criaCarta();

function clickCarta() {

  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

      if (travar || card.classList.contains("flip")) return;

      card.classList.add("flip");

      jogadas++;

      if (!carta1) {

        carta1 = card;

      } else {

        carta2 = card;

        travar = true;

        let img1 = carta1.querySelector(".back-face img").src;

        let img2 = carta2.querySelector(".back-face img").src;

        if (img1 === img2) {

          paresEncontrados++;

          carta1 = null;

          carta2 = null;

          travar = false;

          if (paresEncontrados === numeroCartas / 2) {

            setTimeout(() => {

              alert(`Você ganhou em ${jogadas} jogadas!`);

            }, 500);

          }

        } else {

          setTimeout(() => {

            carta1.classList.remove("flip");

            carta2.classList.remove("flip");

            carta1 = null;

            carta2 = null;

            travar = false;

          }, 1000);

        }

      }

    });

  });

}

clickCarta();