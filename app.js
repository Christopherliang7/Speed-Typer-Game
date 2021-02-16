window.addEventListener('load', init);

// Timer in Seconds
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'Algorithm',
  'Program',
  'API',
  'Argument',
  'Boolean',
  'Object',
  'Array',
  'Closure',
  'Scope',
  'Class',
  'Conditionals',
  'Constants',
  'Declaration',
  'Expression',
  'Iteration',
  'Operator',
  'Runtime',
  'Syntax',
  'Token',
  'Cookie',
  'Local Storage',
  'Hardcode',
  'Loop',
  'Execution'
];

function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}