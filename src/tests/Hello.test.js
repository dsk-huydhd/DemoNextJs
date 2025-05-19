// tests/Hello.test.js
import { getHello, getSum } from '../app/Hello';

describe('Hello Next.js', () => {
  it('renders the correct text', () => {
    expect(getHello('Next.js!')).toBe('Hello, Next.js!');
  });
});

describe('getSum', () => {
  it('Result of Sum(0,0)', () => {
    expect(getSum(0, 0)).toBe(0);
  });

  it('Result of Sum(4,8)', () => {
    expect(getSum(4, 8)).toBe(12);
  });

  it('Result of Sum(12,-10)', () => {
    expect(getSum(12, -10)).toBe(2);
  });
});
