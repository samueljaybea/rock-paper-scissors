
function getComputerChoice() { 
    choice = Math.floor(Math.random() * 3) + 1; //randomly generates an int from 1-3

    if (choice === 1) { //converts the int to a string and returns it's value
        return "rock";
    }
    if (choice === 2) {
        return "paper";
    }
    if (choice === 3) {
        return "scissors";
    }
}

function getPlayerChoice() {
    choice = prompt("Rock, paper, or scissors?"); //prompts user for choice
    choice = choice.toLowerCase(); //converts to lower case
    if (choice == "rock" || choice == "paper" || choice == "scissors") { //checks for a valid choice
        return choice; //returns the value
    }
    else {
        return undefined; // hardcodes return of undefined on an invalid input
    }
}

function capitalize(word) { //capitalizes the first character in a string, reformats the inputs for the log
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

function playGame() {
    let playerScore = 0; //initializes variable for player and computer scores
    let computerScore = 0;

    let playerSelection; //initializes variable for player and computer selection
    let computerSelection

    let roundNumber = 1; //initializes round number and total number of rounds
    const totalRounds = 5;

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) //returns "tie" if computer and player choice are equal
           return "Tie!";

        //outcomes if player wins
        if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") { 
            playerScore = ++playerScore;
            return `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
        }
        
        //outcomes if computer wins
        if (computerChoice == "rock" && playerChoice == "scissors" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissors" && playerChoice == "paper") {
            computerScore = ++computerScore;
            return `You lose :( ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
        }
    }

    for (roundNumber; roundNumber <= totalRounds;) { //replays the game for the specified amount of rounds
        
        playerSelection = getPlayerChoice(); //calls player choice function and assigns to variable
        computerSelection = getComputerChoice();

        if (playerSelection == undefined) { //catches invalid inputs
            console.log("Pick a valid option")
            continue;
        }

        console.log(`Round: ${roundNumber}`) //writes the round number into the log
        console.log(playRound(playerSelection, computerSelection)); //writes the outcome to the log
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`) // writes the scores to the log

        ++roundNumber; //updates round number after a round
    }

    if (roundNumber > totalRounds) {  // writes outcome to the console
        if (playerScore > computerScore) {
            console.log ("The Player wins the game!")
        }
        if (playerScore < computerScore) {
            console.log ("The Computer wins the game! :(")
        }
        if (playerScore === computerScore) {
            console.log ("The game is a tie!")
        }
    }    
}

playGame();

