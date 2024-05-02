
// funzione crea quadrato
function CreaQuadrato(contenuto) {
    let square = document.createElement("div");
    square.innerText = contenuto
    square.classList.add("square");

    square.addEventListener("click", function(){
    console.log("click", this);

    // aggiungo classe al click
    this.classList.toggle("selezionata");
    
        });

    // restituisco la funzione al chiamante
    return square;
}


