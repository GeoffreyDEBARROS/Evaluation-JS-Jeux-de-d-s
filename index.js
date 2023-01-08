// New game // Reset
newGame.addEventListener("click", () => {
  playerName1.innerHTML = "player 1";
  playerName2.innerHTML = "player 2";
  playerScore1.innerHTML = 0;
  playerScore2.innerHTML = 0;
  currentScore1.innerHTML = 0;
  currentScore2.innerHTML = 0;
  globalScore = [0, 0];
  total = 0;
});

// set player swap
let playerNumber = [1, 2];
let randomPlayer = Math.floor(Math.random() * 2); // Random player start
let currentId = `currentScore${playerNumber[randomPlayer]}`;
let current = document.getElementById(currentId);
let scoreId = `playerScore${playerNumber[randomPlayer]}`;
let score = document.getElementById(scoreId);

// Roll dice // Add score // reset if 1 //
let total = 0;
const diceRoll = () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  dice.src = `./img/dice${roll}.svg`; //Set dice img
  if (roll != 1) {
    total += roll;
  } else {
    total = 0;
    current.innerHTML = total;
    // Change player
    randomPlayer = (randomPlayer + 1) % playerNumber.length;
    currentId = `currentScore${playerNumber[randomPlayer]}`;
    current = document.getElementById(currentId);
    scoreId = `playerScore${playerNumber[randomPlayer]}`;
    score = document.getElementById(scoreId);
  }
  current.innerHTML = total;
};
// Hold current score on global score
let globalScore = [0, 0]; // Set global at 0 for the two players
const holdCurrent = () => {
  globalScore[randomPlayer] += total;
  total = 0;
  score.innerHTML = globalScore[randomPlayer];
  current.innerHTML = 0;
  if (globalScore[randomPlayer] >= 20) { // set victory condition
    score.innerHTML = "victory";
  }
  // change player
  randomPlayer = (randomPlayer + 1) % playerNumber.length;
  currentId = `currentScore${playerNumber[randomPlayer]}`;
  current = document.getElementById(currentId);
  scoreId = `playerScore${playerNumber[randomPlayer]}`;
  score = document.getElementById(scoreId);
};

// EventListener //

// Dice roll
roll.addEventListener("click", diceRoll);
// Hold current click
hold.addEventListener("click", holdCurrent);

// Change players names
playerName1.addEventListener("click", () => {
  let pseudo1 = prompt("Enter player one name");
  playerName1.innerHTML = pseudo1;

  if (pseudo1.length < 2) {
    playerName1.innerHTML = "player 1";
  }
});

playerName2.addEventListener("click", () => {
  let pseudo2 = prompt("Enter player two name");
  playerName2.innerHTML = pseudo2;

  if (pseudo2.length < 2) {
    playerName2.innerHTML = "player 2";
  }
});
