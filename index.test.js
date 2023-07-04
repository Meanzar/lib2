const getRandomNumber = require('./index');

test('getRandomNumber should return an integer', () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
});