let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(a) {
    return a * oneEuroIs["JPY"] / oneEuroIs ['USD']; 
};

function fromEuroToDollar(a){
    return a * oneEuroIs['USD'];
}

function fromYenToPound(a) {
    return a * oneEuroIs['GBP'] / oneEuroIs['JPY'];
};


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}