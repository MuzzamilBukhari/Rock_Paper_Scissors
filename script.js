const boxes = document.querySelectorAll(".box");

// const random = Math.floor((Math.random() * 3))
// console.log(random)
// const playGame = () => {
//     if ()
// }
const arr = ['Rock', 'Paper', 'Scissors'];
const getComputerChoice = () => {
    const random = Math.floor((Math.random() * 3))
    return arr[random];
}
boxes.forEach((box) => {
    box.onclick = () => {
        if (box.innerText === getComputerChoice()){
            console.log("Its a draw");
        } else if (box.innerText === "Rock" && getComputerChoice() === "Paper"){
            console.log("Computer Wins");
        } else if (box.innerText === "Rock" && getComputerChoice() === "Scissors"){
            console.log("You wins");
        } else if (box.innerText === "Scissors" && getComputerChoice() === "Rock"){
            console.log("Computer wins");
        } else if (box.innerText === "Scissors" && getComputerChoice() === "Paper"){
            console.log("You wins");
        } else if (box.innerText === "Paper" && getComputerChoice() === "Rock"){
            console.log("You wins");
        } else if (box.innerText === "Paper" && getComputerChoice() === "Scissors"){
            console.log("Computer wins");
        } else {
            console.log("Invalid");
        }
    }
})



