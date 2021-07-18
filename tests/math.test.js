const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')
jest.setTimeout(8000)

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default value tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12)
})

test('should convert farenhite to celcius', () => {
    const celcius = fahrenheitToCelsius(32)
    expect(celcius).toBe(0)
})

test('should convert celcius to farenhite', () => {
    const farenhite = celsiusToFahrenheit(0)
    expect(farenhite).toBe(32)
})

test('should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})
test('should add two numbers aync/await', async () => {
    const sum = await add(2, 3)
    expect(sum).toBe(5)
})




