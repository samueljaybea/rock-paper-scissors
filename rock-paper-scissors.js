function getComputerChoice() {
	//randomly generates an int from 1-3
	choice = Math.floor(Math.random() * 3) + 1;

	//converts the int to a string and returns it's value
	if (choice === 1) {
		return 'rock';
	}
	if (choice === 2) {
		return 'paper';
	}
	if (choice === 3) {
		return 'scissors';
	}
}

//gets player choice from id of clicked button and calls playRound with choice
function getPlayerChoice(clicked_id) {
	let choice = clicked_id;
	console.log(playRound(choice, getComputerChoice()));
}

//capitalizes the first character in a string, reformats the inputs for the log
function capitalize(word) {
	word = word.charAt(0).toUpperCase() + word.slice(1);
	return word;
}

//determines the outcomes for a round
function playRound(playerChoice, computerChoice) {
	//returns "tie" if computer and player choice are equal
	if (playerChoice === computerChoice) return 'Tie!';

	//outcomes if player wins
	if (
		(playerChoice == 'rock' && computerChoice == 'scissors') ||
		(playerChoice == 'paper' && computerChoice == 'rock') ||
		(playerChoice == 'scissors' && computerChoice == 'paper')
	) {
		//playerScore = ++playerScore;

		return `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
	}

	//outcomes if computer wins
	else {
		//computerScore = ++computerScore;
		return `You lose :( ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
	}
}

// function playGame() {
// 	let playerScore = 0; //initializes variable for player and computer scores
// 	let computerScore = 0;

// 	let playerSelection; //initializes variable for player and computer selection
// 	let computerSelection;

// 	//let roundNumber = 1; //initializes round number and total number of rounds
// 	//const totalRounds = 5;

// 	function playRound(playerChoice, computerChoice) {
// 		//returns "tie" if computer and player choice are equal
// 		if (playerChoice === computerChoice) return 'Tie!';

// 		//outcomes if player wins
// 		if (
// 			(playerChoice == 'rock' && computerChoice == 'scissors') ||
// 			(playerChoice == 'paper' && computerChoice == 'rock') ||
// 			(playerChoice == 'scissors' && computerChoice == 'paper')
// 		) {
// 			playerScore = ++playerScore;

// 			return `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
// 		}

// 		//outcomes if computer wins
// 		if (
// 			(computerChoice == 'rock' && playerChoice == 'scissors') ||
// 			(computerChoice == 'paper' && playerChoice == 'rock') ||
// 			(computerChoice == 'scissors' && playerChoice == 'paper')
// 		) {
// 			computerScore = ++computerScore;
// 			return `You lose :( ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
// 		}
//	}

//replays the game for the specified amount of rounds
// for (roundNumber; roundNumber <= totalRounds; ) {
// 	playerSelection = getPlayerChoice(); //calls player choice function and assigns to variable
// 	computerSelection = getComputerChoice();

// 	//catches invalid inputs
// 	if (playerSelection == undefined) {
// 		console.log('Pick a valid option');
// 		continue;
// 	}

// 	console.log(`Round: ${roundNumber}`); //writes the round number into the log
// 	console.log(playRound(playerSelection, computerSelection)); //writes the outcome to the log
// 	console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`); // writes the scores to the log

// 	++roundNumber; //updates round number after a round
// }

// writes outcome to the console
// 	if (roundNumber > totalRounds) {
// 		if (playerScore > computerScore) {
// 			console.log('The Player wins the game!');
// 		}
// 		if (playerScore < computerScore) {
// 			console.log('The Computer wins the game! :(');
// 		}
// 		if (playerScore === computerScore) {
// 			console.log('The game is a tie!');
// 		}
// 	}
// }

// playGame(); //calls game function
