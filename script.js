function computerPlay(){
    let random = Math.ceil(Math.random()*3);
    if(random === 1){
        return 'Rock';
    }else if(random === 2){
        return 'Scissors'
    }else if(random === 3){
        return 'Paper'
    }
    return null
}
const computerSelection = computerPlay();
const playerSelection = prompt("Please enter rock, paper, or scissors").toLowerCase();

