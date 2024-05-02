
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// MILESTONE #1: GENERARE LE BOME
// All'avvio della partita abbiamo bisogno di generare una lista di celle contenenti bombe. Le bombe:
// devono essere casuali
// devono essere sempre 16
// non devono includere ripetizioni, sono tutte diverse
// devono essere un numero, che rappresenti una cella esistente (es. tra 1 e 100)
// Ragionate bene sul da farsi. Potete anche testare una funzioncina in un file separato o in console.
// Potete pensare a un ciclo che finchè non raggiunge lo scopo (16 bombe) continua a:
// generare numeri casuali
// controllare se sono già nella lista di bombe
// aggiungere il numero alla lista o ignorarlo, a seconda del caso


// array lista celle bombe
let listaB = []
console.log(listaB);

// ciclo che crea un numero casuale finchè la lunghezza dell'array non è 16
while (listaB.length < 16) {
    let x = Math.floor(Math.random() * 100) + 1;

    if (!listaB.includes(x)) {
        listaB.push(x);
    } 
}





// funzione crea quadrato
function CreaQuadrato(contenuto) {
    let square = document.createElement("div");
    square.innerText = contenuto
    square.classList.add("square");

    square.addEventListener("click", function () {
        console.log("click", this);

        // aggiungo classe al click
        this.classList.toggle("selezionata");

    });

    // restituisco la funzione al chiamante
    return square;
}


