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

    if (numeroCartas > 3 && numeroCartas < 15){

        while(numeroDasCartas % 2 !== 0){

            numeroCartas = Number(prompt("qual o numero de cartas?"));
    
            if(numeroCartas % 2 ===0 ){
    
                console.log(numeroCartas);
    
            }
    
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

criaCarta (elemento);

/*
                <ul>
                    <li>
                        <div class="carta" onclick="viraCarta1(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta2(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta3(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta4(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta5(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta6(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta7(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta8(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta9(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta10(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                    <div class="carta" onclick="viraCarta11(this)"><img src="assets/back.png"></div>
                    </li>
                    <li>
                        <div class="carta" onclick="viraCarta12(this)"><img src="assets/back.png"></div>
                    </li>
                </ul> */