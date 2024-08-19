let humanScore = 0;
let computerScore = 0;
let round = 1;

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
  let userChoice = prompt(`Round ${round} of 5
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

  if (round < 5) {
    alert(`Score: ${humanScore} - ${computerScore}
Press OK to play another round! (${round}/5)`);
    round++;
  } else {
    const winMessage = humanScore > computerScore ? 'You win!! 🙌🏻' : 'Computer wins.. 🤖';

    alert(`Score: ${humanScore} - ${computerScore}
${winMessage}`);
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
