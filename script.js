function computerPlay () {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return 'Rock'
    } else if (choice == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function capitalize(str) {
    let str1 = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
    return str1
}

function playRound (playerSelection, computerSelection = computerPlay()) {
    let caseInsensitive = capitalize(playerSelection)
    if (caseInsensitive == 'Rock' && computerSelection == 'Rock') {
        draw++
        return 'DRAW!!'
    } else if (caseInsensitive == 'Paper' && computerSelection == 'Paper') {
        draw++
        return 'DRAW!!'
    } else if (caseInsensitive == 'Scissors' && computerSelection == 'Scissors') {
        draw++
        return 'DRAW!!'
    } else if (caseInsensitive == 'Rock' && computerSelection == 'Paper') {
        machineScore++
        return 'Computer WIN!'
    } else if (caseInsensitive == 'Rock' && computerSelection == 'Scissors') {
        playerScore++
        return 'Player WIN!'
    } else if (caseInsensitive == 'Paper' && computerSelection == 'Rock') {
        playerScore++
        return 'Player WIN!'
    } else if (caseInsensitive == 'Paper' && computerSelection == 'Scissors'){
        machineScore++
        return 'Computer WIN!'
    } else if (caseInsensitive == 'Scissors' && computerSelection == 'Rock') {
        machineScore++
        return 'Computer WIN!'
    } else if (caseInsensitive == 'Scissors' && computerSelection == 'Paper') {
        playerScore++
        return 'Player WIN!'
    } else {
        return 'Incorrect Value'
    }
}

let a = 'Rock'
function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound(a))
        console.log(`\n\nPlayer Score: ${playerScore}`)
        console.log(`Machine Score: ${machineScore}`)
    }
    
    // Make function scores for UI Interface preparation 

    if(playerScore > machineScore){
        console.log('')
    }

}

let playerScore = 0
let machineScore = 0
let draw = 0
