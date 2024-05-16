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
  for (let i = 0; i < numerii; i++) {
    // 2.1 Ad ogni iterazione dovrò creare un div, la cella
    const cellagriglia = document.createElement("div");

    // 2.2 Aggiungiamo una classe 'number' al nostro div
    cellagriglia.classList.add("bingoNumber");

    // 2.3 All'interno del div dovrà esserci un h3 con il numero
    const numberCell = document.createElement("h3");
    numberCell.innerText = i + 1;

    // 2.4 Devo appendere l'h3 appena creato alla cella
    cellagriglia.appendChild(numberCell);

    //2.5 Devo  appendere la cella alla  griglia
    grigliaNumeri.appendChild(cellagriglia);

    griglia.push(cellagriglia);
  }
};

const numeriUsciti = [];
const button = document.getElementById("button");

const generaNumero = function () {
  //Crea un numero random
  const numerorandom = Math.floor(Math.random() * 76);
  // Se l'array include il  numero random ( da verificare tramite il metodo .includes(), se è vero tramite return
  //facciamo ripartire la funzione  generaNumero
  if (numeriUsciti.includes(numerorandom)) {
    return generaNumero();
    // nel caso in cui il numero non fosse già presente, lo pushamo nell'array numeriUsciti e successivamente andiamo a selezionare
    //tramite griglia[numerorandom] il numero applicando la classe "selezionata"
  } else {
    numeriUsciti.push(numerorandom);
    // In questo  momento abbiamo selezionato nell'array griglia l'elemento che  viene passato dal numero random
    griglia[numerorandom].classList.add("selezionata");
  }
};

button.addEventListener("click", generaNumero);

window.addEventListener("DOMContentLoaded", () => {
  creaNumeri(76);
});
