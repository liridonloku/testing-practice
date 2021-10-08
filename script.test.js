import { expect, test } from '@jest/globals';
import {
    capitalize,
    reverse,
    calculator,
    cipher,
    analyze,
} from './script.js';

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('calculator add', () => {
    expect(calculator.add(5,6)).toBe(11);
});

test('calculator subtract', () => {
    expect(calculator.subtract(7,4)).toBe(3);
});

test('calculator divide normal', () => {
    expect(calculator.divide(9,3)).toBe(3);
});

test('calculator divide by zero', () => {
    expect(calculator.divide(8,0)).toBe('cant divide by zero');
});

test('multiply', () => {
    expect(calculator.multiply(3,4)).toBe(12);
})

test('cipher', () => {
    expect(cipher(5,'Mjqqt, Btwqie!')).toBe('Hello, Worldz!');
})

test('analyze', () => {
    expect(analyze([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});
