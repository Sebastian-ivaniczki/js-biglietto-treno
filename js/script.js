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

const tripKm = parseInt(prompt(" quanti chilometri dura il tuo viaggi?" , "15").trim());
//console.log(tripKm)


//3- chiedo l'eta del passegero

const pasengerAge = parseInt(prompt("quanti anni hai?" , "25").trim())

//4- calcolo il prezzo del viaggio sapendo che costa (0.21€) al chilometro
const pricePerKm = 0.21;

const tripCost =  tripKm * pricePerKm;
//console.log(tripCost)

//se è minorenne aplico uno sconto del 20%

let ageDiscount = tripCost;

if (pasengerAge <= 18){
    ageDiscount = (tripCost / 100) * 20; 

}



//se ha piu di 65 anni aplico uno sconto del 40%



if (pasengerAge >= 65){
    ageDiscount = (tripCost / 100) * 40; 

}
console.log(ageDiscount);