// Docs Elements

// Elements dati client
const nameElem = document.getElementById(`name`)
const kmClientElem = document.getElementById(`km`)
const tariffAllElem = document.getElementById(`options`)
const submitElem = document.getElementById(`submit`)
const resetELem = document.getElementById(`reset`)
const formElem = document.getElementById(`form`)



// Elements dati biglietto

const bigliettoTrenoElem = document.getElementById(`biglietto-treno`)
const nameClientElem = document.getElementById(`name-client`)
const offertaElem = document.getElementById(`offerta`)
console.log(offertaElem.value)
const seatElem = document.getElementById(`seat`)
const codiceElem = document.getElementById(`codice`)
const costoBigliettoElem = document.getElementById(`costo`)

// dati

const priceKm = 0.21;
console.log(priceKm)

const numberSeat =  Math.floor((Math.random() * 10) + 1)
const numberCodice =  Math.floor((Math.random() * (100000 - 90000)) + 90000)




// Dom events

form.addEventListener("submit", function(event) {
    event.preventDefault()
    let priceBiglietto = kmClientElem.value * priceKm;
    if(tariffAllElem.value === "minoreni") {      
        const discountPriceMinoreni = priceBiglietto * 0.20;
        discount = priceBiglietto - discountPriceMinoreni;
        priceBiglietto -= priceBiglietto - discount;       
        offertaElem.innerHTML = tariffAllElem.value
        costoBigliettoElem.innerHTML = priceBiglietto.toFixed(2)
        bigliettoTrenoElem.classList.remove(`ticket`)
        console.log(priceBiglietto)
    }
    else if(tariffAllElem.value === "pensionati") {
        const discountPricePensionati = priceBiglietto * 0.40;
        discount = priceBiglietto - discountPricePensionati;
        priceBiglietto -= priceBiglietto - discount;
        offertaElem.innerHTML = tariffAllElem.value
        costoBigliettoElem.innerHTML = priceBiglietto.toFixed(2)
        bigliettoTrenoElem.classList.remove(`ticket`)
        console.log(priceBiglietto)
    } 
    else {
        priceBiglietto = kmClientElem.value * priceKm;
        offertaElem.innerHTML = tariffAllElem.value
        costoBigliettoElem.innerHTML = priceBiglietto.toFixed(2)
        bigliettoTrenoElem.classList.remove(`ticket`)
    }

    
    
    

    nameClientElem.innerHTML = nameElem.value; 
    seatElem.innerHTML = numberSeat
    codiceElem.innerHTML = numberCodice
    
    


})















 
