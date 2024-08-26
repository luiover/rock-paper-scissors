// Do not touch
let humanScore = 0;
let computerScore = 0;
let round = 1;
let totalRounds = 5;

const choicesDiv = document.querySelector('#human-choices');
const roundResults = document.querySelector('#round-results');
const score = document.querySelector('#score');
const roundHeader = document.querySelector('#round-header');
const playAgain = document.querySelector('#play-again');
const resultsRectangle = document.querySelector('#results-rectangle');

const computerRockBtn = document.querySelector('#c-rock-btn');
const computerPaperBtn = document.querySelector('#c-paper-btn');
const computerScissorsBtn = document.querySelector('#c-scissors-btn');
const humanRockBtn = document.querySelector('#h-rock-btn');
const humanPaperBtn = document.querySelector('#h-paper-btn');
const humanScissorsBtn = document.querySelector('#h-scissors-btn');

const humanButtons = document.querySelectorAll('#human-choices > .human.choice');
const computerButtons = document.querySelectorAll('#computer-choices > .computer.choice');

function loopOverButtons(buttons, callback) {
  buttons.forEach(callback);
}

choicesDiv.addEventListener('click', (e) => {
  const target = e.target;

  switch (target.id) {
    case 'h-rock-btn':
      humanPaperBtn.classList.remove('chosen');
      humanScissorsBtn.classList.remove('chosen');
      humanRockBtn.classList.add('chosen');
      playRound('Rock', getComputerChoice());
      break;
    case 'h-paper-btn':
      humanPaperBtn.classList.add('chosen');
      humanScissorsBtn.classList.remove('chosen');
      humanRockBtn.classList.remove('chosen');
      playRound('Paper', getComputerChoice());
      break;
    case 'h-scissors-btn':
      humanPaperBtn.classList.remove('chosen');
      humanScissorsBtn.classList.add('chosen');
      humanRockBtn.classList.remove('chosen');
      playRound('Scissors', getComputerChoice());
      break;
  }
});

playAgain.addEventListener('click', togglePlayAgain);

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
  roundHeader.textContent = `— ROUND ${round} —`;
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

  switch (computerChoice) {
    case 'Rock':
      computerRockBtn.classList.add('selected');
      computerPaperBtn.classList.remove('selected');
      computerScissorsBtn.classList.remove('selected');
      break;
    case 'Paper':
      computerRockBtn.classList.remove('selected');
      computerPaperBtn.classList.add('selected');
      computerScissorsBtn.classList.remove('selected');
      break;
    case 'Scissors':
      computerRockBtn.classList.remove('selected');
      computerPaperBtn.classList.remove('selected');
      computerScissorsBtn.classList.add('selected');
      break;
  }

  switch (winner()) {
    case 'tie':
      roundResults.textContent = `${humanChoice} smashes ${computerChoice}\nIt's a tie!`;
      resultsRectangle.style.backgroundColor = '#CBC8BE';
      break;
    case 'human':
      humanScore++;
      roundResults.textContent = `${humanChoice} beats ${computerChoice}! \nYou win!! 🥳`;
      resultsRectangle.style.backgroundColor = '#BEE8A1';
      break;
    case 'computer':
      computerScore++;
      roundResults.textContent = `${humanChoice} burns by ${computerChoice}. \nYou lost..`;
      resultsRectangle.style.backgroundColor = '#FF8D8A';
      break;
  }

  if (round < totalRounds) {
    score.textContent = `Score: ${humanScore} - ${computerScore}`;

    round++;
  } else {
    const winMessage = () => {
      if (humanScore === computerScore) {
        score.style.color = '#ffffff';
        return 'What a tie!!';
      } else if (humanScore > computerScore) {
        score.style.color = '#ffffff';
        return 'Human wins!';
      } else {
        score.style.color = '#ffffff';
        return 'Computer wins...';
      }
    };

    score.textContent = `${winMessage()} (${humanScore} - ${computerScore})`;

    togglePlayAgain();

    humanScore = 0;
    computerScore = 0;
    round = 1;
  }
}

function togglePlayAgain() {
  const classList = playAgain.classList;
  playAgain.classList.toggle('active');

  loopOverButtons(humanButtons, (button) => {
    button.disabled = classList.contains('active') ? true : false;

    if (!button.disabled) {
      button.classList.remove('chosen');
      roundResults.textContent = 'Please make your choice by clicking one of the buttons on your right!';
      roundHeader.textContent = '— TO START —';
      score.textContent = 'Score: 0 - 0';
      resultsRectangle.style.backgroundColor = '#afafaf';
      loopOverButtons(computerButtons, (button) => {
        button.classList.remove('selected');
      });
    }
  });
}
