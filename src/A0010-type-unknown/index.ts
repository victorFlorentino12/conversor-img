// unknown is the any more segure

let x: unknown;
// eslint-disable-next-line prefer-const
x = 10;
if (typeof x === 'number') console.log(x * 2); // you need check type before use value
