// Access Divs
const boxes = document.querySelectorAll(".box");
const resultDiv = document.getElementById("result")
const scoresDiv = document.querySelectorAll(".score");

// Get COmputer Choice Randomly
const getComputerChoice = () => {
    const random = Math.floor((Math.random() * 3))
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[random];
}

// Update the results
let playerScore = 0;
let computerScore = 0;
const updateResult = (score, playerChoice, computerChoice) => {
    if (score == 0) {
        resultDiv.innerText = "Its a Draw";
        resultDiv.style.backgroundColor = "Grey";
    }
    else if (score == 1){
        resultDiv.innerText = `You Win. ${playerChoice} beats ${computerChoice}`;
        resultDiv.style.backgroundColor = "Green";
        playerScore++;
        scoresDiv[0].innerText = playerScore;
    }
    else {
        resultDiv.innerText = `You Lost. ${computerChoice} beats ${playerChoice}`;
        resultDiv.style.backgroundColor = "Red";
        computerScore++;
        scoresDiv[1].innerText = computerScore;
    }
}

// Play Game
const playGame = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice){
        updateResult(0, playerChoice, computerChoice);
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper"){
        updateResult(-1, playerChoice, computerChoice);
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors"){
        updateResult(1, playerChoice, computerChoice);
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock"){
        updateResult(1, playerChoice, computerChoice);
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors"){
        updateResult(-1, playerChoice, computerChoice);
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock"){
        updateResult(-1, playerChoice, computerChoice);
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        updateResult(1, playerChoice, computerChoice);
    } 
    else {
        console.log("Invalid");
    }
}


boxes.forEach((box) => {
    box.onclick = () => {
        let playerChoice = box.innerText
        let computerChoice = getComputerChoice();
        playGame (playerChoice, computerChoice);
    }
})



