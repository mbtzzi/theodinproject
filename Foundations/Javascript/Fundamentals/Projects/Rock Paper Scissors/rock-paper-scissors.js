let computerChoice;
let yourChoice;
let yourScore = 0;
let computerScore = 0;
i=0;
const yourScoreText = document.querySelector("#yourScore");
const computerScoreText = document.querySelector("#computerScore");

//Window event listener
window.addEventListener('click',function(e){
    console.log(e)
})

//Adding event listeners
const btnRock = document.querySelector('#Rock')
btnRock.addEventListener('click',() => {
    yourChoice = "Rock";
    game()
    console.log("Rock")
})

const btnPaper = document.querySelector('#Paper')
btnPaper.addEventListener('click',() => {
    yourChoice = "Paper";
    game()
    console.log("Paper")
})

const btnScissors = document.querySelector("#Scissors")
btnScissors.addEventListener('click',() => {
    yourChoice = "Scissors";
    game()
    console.log("Scissors")
})



//Function definitions
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice;
}


function playRound(yourChoice, computerChoice){
    if (yourChoice.toLowerCase() === computerChoice.toLowerCase()){
        return "It's a tie! Computer also chose " + computerChoice        
    }
    else if (yourChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){

        return "You lost! " + computerChoice.toUpperCase() + " beats " + yourChoice
    }
    else if (yourChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        return "You won! " + yourChoice + " beats " + computerChoice
    }
    else if (yourChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        return "You won! " + yourChoice + " beats " + computerChoice
    }
    else if (yourChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors"){
        return "You lost! " + computerChoice + " beats " + yourChoice
    }
    else if (yourChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock"){ 
        return  "You lost! " + computerChoice + " beats " + yourChoice
    }
    else if (yourChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        return "You won! " + yourChoice + " beats " + computerChoice
    }
    else{return "Error"}
    }

function game(){
    getComputerChoice()
    console.log("The computer choice is: " + computerChoice)
    console.log("Your choice is: " + yourChoice)
    resultText = playRound(yourChoice, computerChoice)
    alert(resultText)
    if (resultText.includes("You won")){
        yourScore +=1
    }
    else if (resultText.includes("You lost!")){
        computerScore +=1
    }
    yourScoreText.innerText = yourScore;
    computerScoreText.innerText = computerScore;
    console.log("Your score is " + yourScore);
    if (yourScore === 5){
        alert("You won! Game is over")  
    }
    else if (computerScore === 5){
        alert("Computer won! Game is over")
    }
}


//Running


//BEST SOLUTION

// const choices = ["Rock", "Paper", "Scissors"];
// const winOutcomes = {
//     Rock: "Scissors",
//     Paper: "Rock",
//     Scissors: "Paper"
// };

// let yourScore = 0;
// let computerScore = 0;
// const yourScoreText = document.querySelector("#yourScore");
// const computerScoreText = document.querySelector("#computerScore");

// function getComputerChoice() {
//     return choices[Math.floor(Math.random() * 3)];
// }

// function playRound(yourChoice, computerChoice) {
//     if (yourChoice === computerChoice) {
//         return "It's a tie! Computer also chose " + computerChoice;
//     } else if (winOutcomes[yourChoice] === computerChoice) {
//         return "You won! " + yourChoice + " beats " + computerChoice;
//     } else {
//         return "You lost! " + computerChoice + " beats " + yourChoice;
//     }
// }

// function updateScores(outcome) {
//     if (outcome.includes("You won")) {
//         yourScore++;
//     } else if (outcome.includes("You lost!")) {
//         computerScore++;
//     }
//     yourScoreText.innerText = yourScore;
//     computerScoreText.innerText = computerScore;
// }

// function game(choice) {
//     yourChoice = choice;
//     computerChoice = getComputerChoice();
//     console.log("The computer choice is: " + computerChoice);
//     console.log("Your choice is: " + yourChoice);
//     const resultText = playRound(yourChoice, computerChoice);
//     alert(resultText);
//     updateScores(resultText);

//     if (yourScore === 5) {
//         alert("You won! Game is over");
//     } else if (computerScore === 5) {
//         alert("Computer won! Game is over");
//     }
// }

// document.getElementById("Rock").addEventListener("click", () => game("Rock"));
// document.getElementById("Paper").addEventListener("click", () => game("Paper"));
// document.getElementById("Scissors").addEventListener("click", () => game("Scissors"));
