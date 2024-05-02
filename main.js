
let btnStart = document.getElementById("btnStart");
let select = document.getElementById("difficoltà");

btnStart.addEventListener("click", function () {
    grid.innerHTML = ""
    gridNorm.innerHTML = ""
    gridHard.innerHTML = ""

    if (select.value == "easy") {
        let griglia = document.getElementById("grid");
        // creo un ciclo for
        for (let i = 1; i <= 100; i++) {
            // ad ogni ciclo richiamo la funzione per creare il quadrato
            let elemento = CreaQuadrato(i);

            // alla griglia aggiungo con append in quadrato nel dom
            griglia.append(elemento);
        }

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

    }
    else if (select.value == "medium") {
        // difficoltà normale
        let griglia = document.getElementById("gridNorm");

        for (let i = 1; i <= 81; i++) {

            let elemento = CreaQuadrato(i);
            griglia.append(elemento);
        }
    }

    else if (select.value == "hard") {
        // difficoltà Difficile
        let griglia = document.getElementById("gridHard");

        for (let i = 1; i <= 49; i++) {

            let elemento = CreaQuadrato(i);
            griglia.append(elemento);
        }

    }

})









//     btnStart.addEventListener("click", function() {






// btnStart.addEventListener("click", function () {
//     // salvo la variabile sul dom virtuale della pagina
//     let griglia = document.getElementById("grid");
//     // creo un ciclo for
//     for (let i = 1; i <= 100; i++) {
//         // // salvo e creo il quadrato nel virtual dom
//         // let square = document.createElement("div");

//         // // aggiungo del testo che prendere il valore di "i" all'interno del quadrato
//         // square.innerText = i

//         // ad ogni ciclo richiamo la funzione per creare il quadrato
//         let elemento = CreaQuadrato(i);

//         // // aggiungo la classe square
//         // square.classList.add("square");

//         // alla griglia aggiungo con append in quadrato nel dom
//         griglia.append(elemento);

//         // elemento.addEventListener("click", function(){
//         // console.log("click");

//         // });


//     }

// })


// // difficoltà normale
// btnNormale.addEventListener("click", function () {
//     let griglia = document.getElementById("gridNorm");

//     for (let i = 1; i <= 81; i++) {

//         let elemento = CreaQuadrato(i);
//         griglia.append(elemento);
//     }
// })


// // difficoltà Difficile
// btnHard.addEventListener("click", function () {
//     let griglia = document.getElementById("gridHard");

//     for (let i = 1; i <= 49; i++) {

//         let elemento = CreaQuadrato(i);
//         griglia.append(elemento);
//     }

// })

// })
