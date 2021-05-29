// Get the DOM Elements
const baseCurrency = document.getElementById('base-currency');
const baseAmount = document.getElementById('base-amount');
const exchangeRates = document.getElementById('exchange-rates');
const paste = document.getElementById('paste');
const ratesTable = document.getElementById("exchange-rates");

// Fetch exchange rates & update the DOM
function calculate() {
    // Get the currency code for the base currency
    const baseCurrencyCode = baseCurrency.value;
    
    // Send request to ExchangeRate-API for conversion rates for thr base currency
    fetch(`https://v6.exchangerate-api.com/v6/a019dbc7d95674d8b4779040/latest/${baseCurrencyCode}`)
        .then(res => res.json())
        .then(data => {
            const rates = data.conversion_rates;
            const keys = Object.keys(rates);
            
            keys.forEach((key) => {
                const table = document.getElementById('rates-table');
                const row = `<tr>
                                <td>${key}</td>
                                <td>${rates[key]}</td>
                            </tr>`;
                table.innerHTML += row;
                
            });
        });
                
};
//Event Listener

baseCurrency.addEventListener("change", calculate);

baseAmount.addEventListener("input", calculate);


// Execute calculate function on page load
calculate();