import {compute, greet, getCurrencies} from './helper';

describe('compute function', () => {
  it('should return 0 if input negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should increment the input', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});

// Testing Strings and Arrays
describe('greet function', () => {
  it('should include the name in the text', () => {
    const name = 'Vasya';
    expect(greet(name)).toContain(name);
  });
  it('should containe specific currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('CAD');
  });
});
