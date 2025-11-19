exports.calculateTip = (total, tipPercent = 0.25) => {
    return total + total * tipPercent;
}

exports.fahrenheitToCelsius = temp => {
    return (temp - 32) / 1.8; 
}

exports.celsiusToFahrenheit = temp => {
    return temp * 1.8 + 32;
}

exports.add = (n1, n2) => {
    const sum = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 + n2);
        }, 2000);
    });

    return sum;
}