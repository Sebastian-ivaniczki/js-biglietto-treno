//console.log("js okk")

/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: */


//1- targhetizzo l'elemento in pagina
//2- chido all'utente il numero di chilometri che deve percorrere 
//3- chiedo l'eta del passegero 
//4- calcolo il prezzo del viaggio sapendo che costa (0.21€) al chilometro
//5- se è minorenne aplico uno sconto del 20%
//6- se ha piu di 65 anni aplico uno sconto del 40%
//7- calcolo il prezzo finale tenendo conto che dovranno uscire al massimo 2 decimali


//1- targhetizzo l'elemento in pagina
const finalPrice = document.getElementById("target");

//2- chido all'utente il numero di chilometri che deve percorrere 

const tripKm = parseInt(prompt(" quanti chilometri dura il tuo viaggi?" , "1999.54333333").trim());
//console.log(tripKm)


//3- chiedo l'eta del passegero

const pasengerAge = parseInt(prompt("quanti anni hai?" , "17").trim())

//4- calcolo il prezzo del viaggio sapendo che costa (0.21€) al chilometro
const pricePerKm = 0.21;

let tripCost =  tripKm * pricePerKm;
tripCost = tripCost.toFixed(2)
//console.log(tripCost)

//validation control

let isValid = true

if (isNaN(tripKm) || isNaN(pasengerAge) ) {
    isValid = false
}
    


let ageDiscount
let  discontedPrice = tripCost;

if (isValid === true){
    
    let tripCost =  tripKm * pricePerKm;
    tripCost = tripCost.toFixed(2)
    //se è minorenne aplico uno sconto del 20%
    if (pasengerAge <= 18){
        ageDiscount = (tripCost * 20) / 100; 
        discontedPrice = tripCost - ageDiscount;
        discontedPrice = discontedPrice.toFixed(2)
    }
    
    //se ha piu di 65 anni aplico uno sconto del 40%
    if (pasengerAge >= 65){
        ageDiscount = (tripCost * 40) / 100; 
        discontedPrice = tripCost - ageDiscount;
        discontedPrice = discontedPrice.toFixed(2)
    }
    
    finalPrice.innerText = `in base alla tua età di ${pasengerAge} ed hai chilometri da percorrere "${tripKm}" il prezzo del biglietto e di ${discontedPrice}€`
}else {
    finalPrice.innerText = "l'eta ed i chilometri devono essere numeri (ricarica la pagina)"
}

//console.log( discontedPrice);

    
    
    
    
    
    
    
    