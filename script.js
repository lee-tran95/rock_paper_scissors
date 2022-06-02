const results = document.querySelector('.results');
const winner = document.querySelector('.winner');
const playerWinsDisplay = document.querySelector('.playerWins')
const computerWinsDisplay = document.querySelector('.computerWins')

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
        results.innerText += `${result}\n`;

        if(/(Win)/.test(result)){
            playerWins++
            playerWinsDisplay.innerText = playerWins;
        }else if(/(Lose)/.test(result)){
            computerWins++
            computerWinsDisplay.innerText = computerWins;
        }



        if(playerWins === 5){
            winner.innerText += " You Win The Game!"
        }else if(computerWins === 5){
            winner.innerText += " The Computer Won the Game"
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