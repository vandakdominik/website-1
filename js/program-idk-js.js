let b = 'print this first';

console.log(localStorage.getItem('nameToSaveUnder'));
console.log(localStorage.getItem('rock-paper-scisours-game-data'));

alert('alert show');

let count = 0;

document.querySelector('.js-button-yellow').addEventListener('click', () => {
  count++;
  console.log(count);
});

document.querySelector('.js-push-data').addEventListener('click', () => {});
