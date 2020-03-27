//var root = document.querySelector('.root')


// const host = 'api.frankfurter.app';
// fetch(`https://api.frankfurter.app/latest?amount=1&from=USD&to=BRL`)



getCurrency()

async function getCurrency() {
    const res = await fetch('https://api.frankfurter.app/currencies')
    const currency = await res.json()
    showCurrency(currency)
}

function showCurrency(currency) {
    for (var i in currency) {
        console.log(i + ' = ' + currency[i])
            //root.innerHTML += `${i} = ${currency[i]} <br>`
    }
}


// getCountries();

// async function getCountries() {
//     const res = await fetch("https://restcountries.eu/rest/v2/all");
//     const countries = await res.json();

//     console.log(countries);
// }