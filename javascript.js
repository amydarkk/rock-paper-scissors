/* Create a new function named getComputerChoice.
Use Math.random to generate a random number between 0 and 100. */
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

/* If the number is less than or equal to 33, make the result "rock". */
    if (randomNumber <= 33) {
        console.log("computer: rock");
        return `rock`;

/* If the number is greater than 33 but less than or equal to 66, make the result "paper". */
}    else if (randomNumber > 33 && randomNumber <=66) {
        console.log("computer: paper"); 
        return `paper`;

/* Else, make the result "scissors". */
}    else {
        console.log("computer: scissors");
        return `scissors`;
}
} 


/* Step 3: Write the logic to get the human choice
Create a new function called getHumanChoice */
function getHumanChoice() {

/* Create a variable called userChoice. The value should be added by a prompt */
let userChoice = prompt("Rock, paper or scissors?");

/* Format the user's input to be all lowercase */
console.log("user: " + userChoice);

/* Return the user's input */
return userChoice.toLowerCase();

}

/* Step 4: Declare the players score variables
Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0. */

let computerScore = 0;
let humanScore = 0;

/* Step 5: Write the logic to play a single round
Create a new function named playRound. */
function playRound(humanChoice, computerChoice) {

/* If the user and computer choose the same options, return the result draw. Log the result. */
    if (humanChoice === computerChoice) {
        console.log("It's a draw!")  
        return `draw`; 

/* Else if the computer chooses a winning option over the user's option, return 
the result computer. Log the result. */
    }  else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log('Computer wins!')
        return `computer`;

/* Else the remaining possible outcomes, if the user chooses a winning option
over the computer's option, return the result human. Log the result. */
    }   else {
        console.log('You win!')
        return `human`;
}  
}

/* Increment the humanScore or computerScore variable based on the round winner. 
Create a new function called playGame. */
function playGame() {
    
// Play 5 rounds
    for (let round = 1; round <= 5; ++round) {
        console.log(`--- Round ${round} ---`);
        
// Call humanChoice and computerChoice inside the loop, so they are asked for each round.
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

// Increment scores based on the result.
        if (result === "human") {
            ++humanScore;
        } else if (result === "computer") {
            ++computerScore;
        }

// Log the scores at the end of each round.
        console.log(`Score after Round ${round}: Human ${humanScore} - Computer ${computerScore}`);
    }

// Final result
    console.log(`\nFinal Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();
