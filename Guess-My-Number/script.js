'use strict';
//project number 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displaymessage('no number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'corret number :)';
    displaymessage('corret number :)');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess>score?'too high':'too low'
      displaymessage(guess > secretNumber ? 'too high' : 'too low');
      score = score - 1;
      document.querySelector('.score ').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game';
      displaymessage('you lost the game');
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score = score - 1;
  //     document.querySelector('.score ').textContent = score;
  //   }else{
  //       document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score = score - 1;
  //     document.querySelector('.score ').textContent = score;
  //   }else{
  //       document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'start gusseing';
  displaymessage('start gusseing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
const newfeatures = function () {
  console.log('welcom');
};
