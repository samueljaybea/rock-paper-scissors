const btns = document.querySelectorAll('button');
const results = document.querySelector('#results');

const playerCounter = document.querySelector('#player-counter');
const computerCounter = document.querySelector('#computer-counter');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const scoreTotal = 5; //set target score for a winner

let roundCounter = document.querySelector('#round-counter');

//identifies which button is clicked by it's ID and calls the playround function with the ID
btns.forEach((btn) => {
	btn.addEventListener('click', function () {
		if (playerScore < scoreTotal && computerScore < scoreTotal) {
			let choice = this.id;
			playRound(choice, getComputerChoice());
		}
	});
});

function getComputerChoice() {
	choice = Math.floor(Math.random() * 3) + 1;

	if (choice === 1) {
		return 'Rock';
	}
	if (choice === 2) {
		return 'Paper';
	}
	if (choice === 3) {
		return 'Scissors';
	}
}

function playRound(playerChoice, computerChoice) {
	roundNumber = ++roundNumber;
	roundCounter.textContent = roundNumber;

	if (playerChoice === computerChoice) {
		results.textContent = 'Tie!';
	}

	//outcomes if player wins
	else if (
		(playerChoice == 'Rock' && computerChoice == 'Scissors') ||
		(playerChoice == 'Paper' && computerChoice == 'Rock') ||
		(playerChoice == 'Scissors' && computerChoice == 'Paper')
	) {
		playerScore = ++playerScore;
		playerCounter.textContent = playerScore;
		results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
	}

	//outcomes if computer wins
	else {
		computerScore = ++computerScore;
		computerCounter.textContent = computerScore;
		results.textContent = `You lose :( ${computerChoice} beats ${playerChoice}.`;
	}

	if (computerScore === scoreTotal || playerScore === scoreTotal) {
		gameWin();
	}
}

//adds play again button
const playAgain = document.querySelector('#play-again');
const playButton = document.createElement('button');
playButton.textContent = 'Play Again?';

playButton.addEventListener('click', function () {
	playerScore = 0;
	computerScore = 0;
	roundNumber = 1;
	playerCounter.textContent = playerScore;
	computerCounter.textContent = computerScore;
	roundCounter.textContent = roundNumber;
	results.textContent = '';
	gameOutcome.textContent = '';
	playButton.parentNode.removeChild(playButton);
});

const gameOutcome = document.createElement('div');

function gameWin() {
	playAgain.append(gameOutcome);
	playAgain.append(playButton);
	if (playerScore > computerScore) {
		gameOutcome.textContent = 'The Player wins the game!';
	}
	if (playerScore < computerScore) {
		gameOutcome.textContent = 'The Computer wins the game! :(';
	}
}
