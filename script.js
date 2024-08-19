// Do not touch
let humanScore = 0;
let computerScore = 0;
let round = 1;

// Here you can increment the total rounds if you want
let totalRounds = 5;

(function playGame() {
  while (round <= totalRounds) {
    if (!round) {
      break;
    }

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  const answer = prompt('Want to play another match? (Press OK/Cancel)');
  if (answer === null) {
    return;
  }

  round = 1;
  humanScore = 0;
  computerScore = 0;
  playGame();
})();

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  switch (randomChoice) {
    case 1:
      return 'Rock';
      break;
    case 2:
      return 'Paper';
      break;
    case 3:
      return 'Scissors';
      break;
  }
}

function getHumanChoice() {
  let userChoice = prompt(`Round ${round} of ${totalRounds}
Choose between Rock 🪨, Paper 🗞️ and Scissors ✂️!`);
  if (!userChoice) {
    userChoice = 'undefined';
  }
  userChoice = userChoice.toLowerCase();

  const availableChoices = ['rock', 'paper', 'scissors'];

  if (!availableChoices.includes(userChoice.toLowerCase())) {
    alert("That's not a valid answer!");
    return getHumanChoice();
  }

  const choice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const winner = () => {
    if (humanChoice === computerChoice) {
      return 'tie';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
      return 'human';
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
      return 'human';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
      return 'human';
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
      return 'computer';
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
      return 'computer';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
      return 'computer';
    }
  };

  switch (winner()) {
    case 'tie':
      alert(`${humanChoice} vs ${computerChoice}... It's a tie!`);
      break;
    case 'human':
      humanScore++;
      alert(`${humanChoice} beats ${computerChoice}! You win!! 🥳`);
      break;
    case 'computer':
      computerScore++;
      alert(`${humanChoice} gets destroyed by ${computerChoice}. You lost..`);
      break;
  }

  if (round < totalRounds) {
    alert(`Score: ${humanScore} - ${computerScore}
Press OK to play another round! (${round}/${totalRounds})`);

    round++;
  } else {
    const winMessage = () => {
      if (humanScore === computerScore) {
        return 'Incredibly, the game has ended in a tie!';
      } else if (humanScore > computerScore) {
        return 'Congratulations user, You won the game!';
      } else {
        return 'The computer has defeated you..';
      }
    };

    alert(`Final score: ${humanScore} - ${computerScore}
${winMessage()}`);

    round = null;
  }
}
