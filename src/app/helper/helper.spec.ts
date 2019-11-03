import {compute} from './helper';

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
