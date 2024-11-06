let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#result')
const userScoreBoard = document.querySelector("#user-score")
const compScoreBoard = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomVal = Math.floor(Math.random() * 3)
    return options[randomVal];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
    }
    else {
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`

    }
}

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})