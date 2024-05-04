
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
    if (choice === "rock" || choice === "paper" || choice === "scissors") { //checks for a valid choice
        return choice; //returns the value
    }
    else {
        getPlayerChoice(); //restarts the function if there isn't a valid choice
    }

}

function capitalize(word) { //capitalizes the first character in a string, used to format the selection after it has been altered with .toLowerCase
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

function playGame() {
    let playerScore = 0; //initializes the variables for player and computer scores
    let computerScore = 0;
    let playerSelection = getPlayerChoice(); //initializes a variable for player and computer selection
    let computerSelection = getComputerChoice();

    function playRound(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) //returns "tie" if computer and player choice are the same
           return "Tie!";
    
        if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") { //outcomes if player wins
            playerScore = ++playerScore;
            return `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
        }
    
        if (computerChoice == "rock" && playerChoice == "scissors" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissors" && playerChoice == "paper") {//outcome if computer wins
            computerScore = ++computerScore;
            return `You lose :( ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`
        }
    }

    for (let i = 1; i < 6; ++i) {
        console.log(`Round ${i}`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
        playerSelection = getPlayerChoice(); //initializes a constant variable for player and computer selection
        computerSelection = getComputerChoice();
    }
}

playGame();
