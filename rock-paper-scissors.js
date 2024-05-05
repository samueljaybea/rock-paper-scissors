
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
        return undefined; // hardcode return of undefined on an invalid input
    }
}

function capitalize(word) { //capitalizes the first character in a string, reformats the inputs for the log
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

function playGame() {
    let playerScore = 0; //initializes the variables for player and computer scores
    let computerScore = 0;
    let playerSelection; //initializes a variable for player and computer selection
    let computerSelection

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) //returns "tie" if computer and player choice are the same
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

    for (let i = 1; i < 6;) {
        
        playerSelection = getPlayerChoice(); //calls function and assigns to variable
        computerSelection = getComputerChoice();

        if (playerSelection == undefined) { //catches invalid inputs
            console.log("Pick a valid option")
            continue;
        }

        console.log(`Round ${i}`) //writes the round number into the log
        console.log(playRound(playerSelection, computerSelection)); //writes the outcome to the log
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`) // writes the scores to the log
        
        ++i; //updates round number
    }
}

playGame(); // calls the game function
