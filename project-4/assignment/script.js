// Get the DOM Elements
const baseCurrency = document.getElementById('base-currency');
const baseAmount = document.getElementById('base-amount');
const exchangeRates = document.getElementById('exchange-rates');
const paste = document.getElementById('paste');

// Fetch exchange rates & update the DOM
function calculate() {
    // Get the currency code for the base currency
    const baseCurrencyCode = baseCurrency.value;
    
    // Send request to ExchangeRate-API for conversion rates for thr base currency
    fetch(`https://v6.exchangerate-api.com/v6/8acf3f578e33647a1a9ee130/latest/${baseCurrencyCode}`)
        .then(res => res.json())
        .then(data => {
            const conversionRates = data.conversion_rates;

            const keys = Object.keys(conversionRates);
            
            
        
            });
        };


//Event Listener

baseCurrency.addEventListener('change', calculate);

baseAmount.addEventListener('input', calculate);

