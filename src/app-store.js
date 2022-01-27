// import { writable } from 'svelte/store';
// for animation use 'tweened' instead of 'writable'
import { tweened } from 'svelte/motion';
import { cubicIn } from 'svelte/easing';

let beginingValue = 0;

const progress = tweened(beginingValue, {
  delay: 0,
  duration: 700,
  easing: cubicIn
});

setTimeout(() => {
  progress.set(0.5);
}, 1500);

const customProgress = {
  subscribe: progress.subscribe
};

export default customProgress;