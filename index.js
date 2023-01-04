// Change player name
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

// Roll dice
let diceRoll = () => {
  let diceNumber = Math.floor(Math.random() * 6 + 1);
  dice.src = `./img/dice${diceNumber}.svg`;
  return diceNumber;
};


roll.addEventListener("click", diceRoll);
