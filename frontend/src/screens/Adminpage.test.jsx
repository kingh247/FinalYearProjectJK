import add from './sum';
describe('sum.js', () => {
  test('add two numbers', function () {
    expect(add(1, 2)).toBe(3);
  });
});
