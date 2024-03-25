import add from '../sum';
describe('sum.js', () => {
  test('add two numbers', function () {
    expect(add(2, 2)).toBe(4);
  });
});
