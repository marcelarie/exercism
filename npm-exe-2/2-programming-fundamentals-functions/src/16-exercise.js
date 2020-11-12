/**
 * Let’s play Rock, Paper, Scissors!
 *
 * Rules:
 *
 * 1. Rock wins against scissors.
 * 2. Scissors win against paper.
 * 3. Paper wins against rock.
 * 4. If both user choose the same, play again.
 *
 * If the user wins:
 * return: "User wins!" // the variable 'userWins'
 *
 * If the computer wins:
 * return: "Computer wins!" // the variable 'computerWins'
 *
 * If you both have the same option:
 * return: "Play again!" // the variable 'sameChoice'
 *
 * The `rockPaperScissors()` function receives 2 parameters
 * `userChoice` and `computerChoice`
 * that you can provide to try the function.
 */
function rockPaperScissors(userChoice, computerChoice) {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    // Return these variables
    let userWins = 'User wins!';
    let computerWins = 'Computer wins!';
    let sameChoice = 'Play again!';

    // Write the solution bellow this line
    if (userChoice === computerChoice) {
        return sameChoice;
    } else if ((userChoice === rock && computerChoice === paper) || (userChoice === paper && computerChoice === scissors) || (userChoice === scissors && computerChoice === rock)) {
        return computerWins;
    } else {
        return userWins;
    };
}

module.exports = rockPaperScissors;
