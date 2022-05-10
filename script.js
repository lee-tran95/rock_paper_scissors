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


function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return "It's a draw!"
    }
    if(playerSelection === 'rock'){
        return computerSelection === 'scissors' ? "You Win! Rock beats Scissors" :"You Lose! Paper beats Rock"
    }else if(playerSelection === 'paper'){
        return computerSelection === 'rock' ? "You Win! Paper beats Rock":"You Lose! Scissors beats Paper"
    }else if(playerSelection === 'scissors'){
        return computerSelection === 'paper' ? "You win! Scissors beats Paper":"You Lose! Rock beats Scissors"
    }
}


function game(){
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();
        let result = playRound(computerSelection, playerSelection)
        console.log(result)
        if(/(Win)/.test(result)){
            playerWins++
        }else if(/(Lose)/.test(result)){
            computerWins++
        }
    }

    if(playerWins > computerWins){
        return "Player Wins!"
    }else if (playerWins === computerWins){
        return "It's a draw!"
    }else{
        return "Computer Wins!"
    }
}

console.log(game())
