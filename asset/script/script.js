//**************************************** EPIC  BINGO! **************************************** */

// PARTE 1 - PARTE STATICA DELLA  PAGINA

// 1. I seguenti task dovranno essere eseguiti all'avvio dell'applicazione per poter creare tutta la struttura del bingo✅
// 2. Dobbiamo inserire le 76 celle dei numeri nel bingo✅
// 3. Dobbiamo  creare il  bottone "GENERATE NUMER"✅

// PARTE 2 - PARTE DINAMICA  DELLA PAGINA

// 1. Quando clicchiamo sul bottone, esso dovrà generare un numero casuale da 1 a 76
// 2. Una volta  generato il numero casuale, la cella con il numero di riferimento dovrà avere una cornice verde
// 3. Cercare possibilmente di non far generare due volte lo stesso numero

const griglia = [];
const numeri = 76;

const creaNumeri = (numerii) => {
  // 1. Cerchiamo un riferimento al div 'calendar'
  const grigliaNumeri = document.getElementById("grigliaNumeri");

  // 2. Devo creare un certo numero di celle, 'certo numero' è un valore che viene passato come parametro
  for (let i = 1; i <= numerii; i++) {
    griglia.push([]);
    console.log(griglia);
    // 2.1 Ad ogni iterazione dovrò creare un div, la cella
    const cellagriglia = document.createElement("div");

    // 2.2 Aggiungiamo una classe 'number' al nostro div
    cellagriglia.classList.add("bingoNumber");

    // 2.3 All'interno del div dovrà esserci un h3 con il numero
    const numberCell = document.createElement("h3");
    numberCell.innerText = i;

    // 2.4 Devo appendere l'h3 appena creato alla cella
    cellagriglia.appendChild(numberCell);

    //2.5 Devo  appendere la cella alla  griglia
    grigliaNumeri.appendChild(cellagriglia);
  }
};

const button = document.getElementById("button");
function generaNumeroRandom() {
  const numerocasuale = Math.floor(Math.random() * 77);
  const numeroElemento = document.getElementById("randomNumber");
  numeroElemento.textContent = `Numero generato: ${numeroCasuale}`;

  const boxnumero = document.createElement(div);
  boxnumero.classList.add("numerodelbox");
}

window.addEventListener("DOMContentLoaded", () => {
  creaNumeri(76);
});
