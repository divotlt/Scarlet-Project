// main.js
import { createCounter } from './counter.js';

const myCounter = createCounter(10);

console.log('Initial value:', myCounter.getValue()); // 10
myCounter.increment();
console.log('After increment:', myCounter.getValue()); // 11
