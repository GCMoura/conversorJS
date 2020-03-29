var dropFrom = document.querySelector('.from')
var dropTo = document.querySelector('.to')
var inputInitialFrom = document.querySelector('.input-group-text-from')
var inputInitialTo = document.querySelector('.input-group-text-to')
var flagFrom = document.querySelector('.flag1')
var flagTo = document.querySelector('.flag2')
var flagFromImg = document.querySelector('.flag1Img')
var flagToImg = document.querySelector('.flag2Img')
var quantFrom = document.querySelector('.form-control-from')
var convertedTo = document.querySelector('.form-control-to')
var converseButton = document.querySelector('.button')

var currencyName
var codeFrom
var codeTo


getCurrency()

async function getCurrency() {
    const res = await fetch('https://api.frankfurter.app/currencies')
    const currency = await res.json()
    showCurrency(currency)
    console.log(currency)
}


function showCurrency(currency) {

    for (var i in currency) {
        var span = document.createElement('span')
        span.classList.add('listFrom')
        span.innerHTML = `${currency[i]} <br>`
        dropFrom.appendChild(span)

    }

    for (var i in currency) {
        var span = document.createElement('span')
        span.classList.add('listTo')
        span.innerHTML = `${currency[i]} <br>`
        dropTo.appendChild(span)
    }
    var listFrom = document.querySelectorAll('.listFrom')
    listFrom.forEach(element => {
        element.addEventListener('click', function() { getCurrencyFrom(element.innerHTML, currency) })
    })

    var listTo = document.querySelectorAll('.listTo')
    listTo.forEach(element => {
        element.addEventListener('click', function() { getCurrencyTo(element.innerHTML, currency) })
    })
}

function getCurrencyFrom(element, currency) {
    var newElement = element.split(' ')

    newElement.forEach(() => {
        if (newElement.length == 4) {
            currencyName = newElement[0] + ' ' + newElement[1] + ' ' + newElement[2]
        }
        if (newElement.length == 3) {
            currencyName = newElement[0] + ' ' + newElement[1]
        }
        if (newElement.length == 2) {
            currencyName = newElement[0]
        }
    })


    for (var i in currency) {
        if (currencyName === currency[i]) {
            inputInitialFrom.innerHTML = i
            getCountriesFrom(i);
            console.log(i)
            codeFrom = i
        }
    }


}

async function getCountriesFrom(code) {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();

    console.log(countries)

    for (var i = 0; i < countries.length; i++) {
        if (code === countries[i].currencies[0].code) {
            if (code === 'AUD') {
                flagFromImg.setAttribute('src', 'https://restcountries.eu/data/aus.svg')
                flagFrom.appendChild(flagFromImg)
            } else if (code === 'DKK') {
                flagFromImg.setAttribute('src', 'https://restcountries.eu/data/dnk.svg')
                flagFrom.appendChild(flagFromImg)
            } else if (code === 'EUR') {
                flagFromImg.setAttribute('src', 'https://restcountries.eu/data/fsm.svg')
                flagFrom.appendChild(flagFromImg)
            } else if (code === 'NZD') {
                flagFromImg.setAttribute('src', 'https://restcountries.eu/data/nzl.svg')
                flagFrom.appendChild(flagFromImg)
            } else if (code === 'ILS') {
                flagFromImg.setAttribute('src', 'https://restcountries.eu/data/isr.svg')
                flagFrom.appendChild(flagFromImg)
            } else {
                flagFromImg.setAttribute('src', `${countries[i].flag}`)
                flagFrom.appendChild(flagFromImg)
            }
        } else if (code === 'SGD') {
            flagFromImg.setAttribute('src', 'https://restcountries.eu/data/sgp.svg')
            flagFrom.appendChild(flagFromImg)
        }
    }
}


function getCurrencyTo(element, currency) {
    var newElement = element.split(' ')
    var currencyName
    newElement.forEach(() => {
        if (newElement.length == 4) {
            currencyName = newElement[0] + ' ' + newElement[1] + ' ' + newElement[2]
        }
        if (newElement.length == 3) {
            currencyName = newElement[0] + ' ' + newElement[1]
        }
        if (newElement.length == 2) {
            currencyName = newElement[0]
        }
    })


    for (var i in currency) {
        if (currencyName === currency[i]) {
            inputInitialTo.innerHTML = i
            getCountriesTo(i);
            codeTo = i
        }
    }

}

async function getCountriesTo(code) {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();


    for (var i = 0; i < countries.length; i++) {
        if (code === countries[i].currencies[0].code) {
            if (code === 'AUD') {
                flagToImg.setAttribute('src', 'https://restcountries.eu/data/aus.svg')
                flagTo.appendChild(flagToImg)
            } else if (code === 'DKK') {
                flagToImg.setAttribute('src', 'https://restcountries.eu/data/dnk.svg')
                flagTo.appendChild(flagToImg)
            } else if (code === 'EUR') {
                flagToImg.setAttribute('src', 'https://restcountries.eu/data/fsm.svg')
                flagTo.appendChild(flagToImg)
            } else if (code === 'NZD') {
                flagToImg.setAttribute('src', 'https://restcountries.eu/data/nzl.svg')
                flagTo.appendChild(flagToImg)
            } else if (code === 'ILS') {
                flagToImg.setAttribute('src', 'https://restcountries.eu/data/isr.svg')
                flagTo.appendChild(flagToImg)
            } else {
                flagToImg.setAttribute('src', `${countries[i].flag}`)
                flagTo.appendChild(flagToImg)
            }
        } else if (code === 'SGD') {
            flagToImg.setAttribute('src', 'https://restcountries.eu/data/sgp.svg')
            flagTo.appendChild(flagToImg)
        }
    }
}

converseButton.addEventListener('click', convert, false)

async function convert() {
    var amount = quantFrom.value

    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${codeFrom}&to=${codeTo}`)
    const currency = await res.json()

    var converted = currency.rates

    for (var i in converted) {
        convertedTo.value = converted[i]
    }



}