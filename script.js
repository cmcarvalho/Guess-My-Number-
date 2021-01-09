'use strict';

// console.table(document.querySelector('.message'));
// // console.log(
// // (document.querySelector('.message').textContent = 'Take a guess...')
// // );

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let myArr = Array(20)
//   .join()
//   .split(',')
//   .map(
//     function (a) {
//       return this.i++;
//     },
//     { i: 1 }
//   );

// console.log(numberArray);

let score = 20;
let highScore = 0;

let secretNumber = Math.random();
secretNumber = secretNumber * 20;
secretNumber = Math.trunc(secretNumber) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = String(highScore);
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = String(score);

    //When guess is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = String(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.random();
  secretNumber = secretNumber * 20;
  secretNumber = Math.trunc(secretNumber) + 1;

  score = 20;

  document.querySelector('.message').textContent = 'Starting guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = String(score);
});
