import { array } from "yargs";

const capitalize = (string) => {
    const firstLetter = string.slice(0,1).toUpperCase();
    const restOfString = string.slice(1);
    return firstLetter+restOfString;
}

const reverse = (string) => {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    divide: (a,b) => b===0? 'cant divide by zero' : a/b,
    multiply: (a,b) => a*b,
}

const cipher = (shift, string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alternateAlphabet = alphabet.slice(shift) + alphabet.slice(0,shift);
    let newString = '';
    for(let i=0; i < string.length; i++){
        if(alternateAlphabet.indexOf(string.charAt(i).toLowerCase()) < 0){
            newString += string.charAt(i);
        }
        if(string.charAt(i) === string.charAt(i).toLowerCase()){
            newString += alphabet.charAt(alternateAlphabet.indexOf(string.charAt(i).toLowerCase()));
        }   else {
            newString += alphabet.charAt(alternateAlphabet.indexOf(string.charAt(i).toLowerCase())).toUpperCase();
        }
    }
    return newString;
}

const analyze = (array) => {
    const average = array.reduce((a,b) => a+b)/array.length;
    const min = array.reduce((a,b) => Math.min(a,b));
    const max = array.reduce((a,b) => Math.max(a,b));
    const length = array.length;
    return {
        average,
        min,
        max,
        length
    }
} 

export {
    capitalize,
    reverse,
    calculator,
    cipher,
    analyze,
}