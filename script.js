function computerPlay(){
    let random = Math.ceil(Math.random()*3);
    if(random === 1){
        return 'rock';
    }else if(random === 2){
        return 'scissors'
    }else if(random === 3){
        return 'paper'
    }
    return null
}
const computerSelection = computerPlay();
const playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();

function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return "It's a draw!"
    }
    if(playerSelection === 'rock'){
        return computerSelection === 'scissors' ? "You Win! Rock beats Scissors":"You Lose! Paper beats Rock"
    }else if(playerSelection === 'paper'){
        return computerSelection === 'rock' ? "You Win! Paper beats Rock":"You Lose! Scissors beats Paper"
    }else if(playerSelection === 'scissors'){
        return computerSelection === 'paper' ? "You win! Scissors beats Paper":"You Lose! Rock beats Scissors"
    }
}

console.log(playRound(computerSelection, playerSelection))
