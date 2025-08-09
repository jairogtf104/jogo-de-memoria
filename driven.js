const listaDeImagens = [
    "assets/bobrossparrot.gif", 
    "assets/explodyparrot.gif",
    "assets/fiestaparrot.gif", 
    "assets/metalparrot.gif",
    "assets/revertitparrot.gif",
    "assets/tripletsparrot.gif",
    "assets/unicornparrot.gif"]
 
function numeroDeCartas() {

    numeroCartas = Number(prompt("qual o numero de cartas?"));

    while(numeroDasCartas % 2 !== 0){

        numeroDasCartas = Number(prompt("qual o numero de cartas?"));

        if(numeroCartas % 2 ===0 ){

            console.log(numeroCartas);

        }

    }

}

function criaCarta (elemento){

  const ul = document.querySelector("ul");

  let contador = 0;

  while(contador < numeroCartas){

    const elementos = 
    `<li>
        <div class="carta" onclick="viraCarta1(this)"><img src="assets/back.png"></div>
    </li>`;

    ul.innerHTML += elementos;

  contador++;

  }

}

