const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math.js');

// calculateTip
test('Calculate total with tip', () => {
    expect(calculateTip(100,0.1)).toBe(110);
});

// test('Calculate tip when tip percent is not passed', () => {
//     expect(calculateTip(100)).toBe(125);
// });

// temp conversions
// test('Fahrenheit to Celsius', () => {
//     expect(fahrenheitToCelsius(32)).toBe(0);
// });

// test('Celsius to Fahrenheit', () => {
//     expect(celsiusToFahrenheit(0)).toBe(32);
// });

// async testing
// test('Async test', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(1);
//         done();
//     }, 2000);
// });

// test('Test with promises', async () => {
//     const sum = await add(5,6);
//     expect(sum).toBe(11);
// });