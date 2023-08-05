let computerChoice;
let yourChoice;
i=0;


function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    computerChoice = computerChoice
    return computerChoice;
}

function getYourChoice(){
    yourChoice = prompt("Please select Rock, Paper or Scissor")
    return yourChoice;
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
        return "You lost! " + computerChoice + " beats " + yourChoice
    }
    else if (yourChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        return "You won! " + yourChoice + " beats " + computerChoice
    }
    else{return "Algo raro hay"}
    }

function game(){
    while (i<6){
        getYourChoice()
        getComputerChoice()
        console.log("The computer choice is: " + computerChoice)
        console.log("Your choice is: " + yourChoice)
        alert(playRound(yourChoice, computerChoice))
        i += 1;
    }
}


