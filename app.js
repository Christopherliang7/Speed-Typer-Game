window.addEventListener('load', init);

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

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
  console.log('Initialized!')
}