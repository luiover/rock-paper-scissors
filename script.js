// Do not touch
let humanScore = 0;
let computerScore = 0;
let round = 1;
let totalRounds = 5;

const choiceContainer = document.querySelector('#choice-container');
const roundResults = document.querySelector('#round-results');

choiceContainer.addEventListener('click', (e) => {
  const target = e.target;

  switch (target.id) {
    case 'rock-btn':
      playRound('Rock', getComputerChoice());
      break;
    case 'paper-btn':
      playRound('Paper', getComputerChoice());
      break;
    case 'scissors-btn':
      playRound('Scissors', getComputerChoice());
      break;
  }
});

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
      roundResults.textContent = `${humanChoice} vs ${computerChoice}... It's a tie!`;
      break;
    case 'human':
      humanScore++;
      roundResults.textContent = `${humanChoice} beats ${computerChoice}! You win!! 🥳`;
      break;
    case 'computer':
      computerScore++;
      roundResults.textContent = `${humanChoice} gets destroyed by ${computerChoice}. You lost..`;
      break;
  }

  if (round < totalRounds) {
    roundResults.textContent += `\nScore: ${humanScore} - ${computerScore}
Press a button to play another round! (${round}/${totalRounds})`;

    round++;
  } else {
    const winMessage = () => {
      if (humanScore === computerScore) {
        return 'Incredibly, the game has ended in a tie!';
      } else if (humanScore > computerScore) {
        return 'Congratulations user, you won the game!';
      } else {
        return 'The computer has defeated you..';
      }
    };

    roundResults.textContent = `Final score: ${humanScore} - ${computerScore}
${winMessage()}`;

    humanScore = 0;
    computerScore = 0;
    round = 1;
  }
}
