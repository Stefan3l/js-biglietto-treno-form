// Docs Elements

// Elements dati client
const nameElem = document.getElementById(`name`)
const kmClientElem = document.getElementById(`km`)
console.log(kmClientElem)
const tariffStandardElem = document.getElementById(`standard`)
const tariffMinoreniElem = document.getElementById(`minoreni`)
const tariffPensionatiElem = document.getElementById(`pensionati`)
const submitElem = document.getElementById(`submit`)
const resetELem = document.getElementById(`reset`)


// Elements dati biglietto

const nameClientElem = document.getElementById(`name-client`)
const offertaElem = document.getElementById(`offerta`)
const seatElem = document.getElementById(`seat`)
const codiceElem = document.getElementById(`codice`)
const costoBigliettoElem = document.getElementById(`costo`)

const priceKm = 0.21;
console.log(priceKm)



submitElem.addEventListener("submit", function() {
    let priceBiglieto = kmClientElem * priceKm;
    console.log(priceBiglieto)
})