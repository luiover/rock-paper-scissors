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
  let userChoice = prompt('Choose between Rock 🪨, Paper 🗞️ and Scissors ✂️!');
  userChoice = userChoice.toLowerCase();

  const availableChoices = ['rock', 'paper', 'scissors'];

  if (!availableChoices.includes(userChoice.toLowerCase())) {
    alert("That's not a valid answer!");
    return getHumanChoice();
  }

  const choice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  return choice;
}
