const winner = document.querySelector('.results');

let playerWins = 0;
let computerWins = 0;

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


function game(playerSelection){
        const computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection)
        winner.innerText += `${result}\n`;
        if(/(Win)/.test(result)){
            playerWins++
        }else if(/(Lose)/.test(result)){
            computerWins++
        }
        if(playerWins >= 5){
            
        }
    }




const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click',() =>{
        if(playerWins >= 5 || computerWins >= 5){
            return;
        }
        let playerSelection = button.className;
        game(playerSelection);
    })
});