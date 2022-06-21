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

function changeComputerPicture(picture) {
    if(picture == "Rock") {
        computerPicture.setAttribute('src', './images/rock.png')
    } else if (picture == 'Paper') {
        computerPicture.setAttribute('src', './images/paper.png')
    } else if (picture == 'Scissors') {
        computerPicture.setAttribute('src', './images/scissor.png')
    } else {
        computerPicture.setAttribute('src', './images/interrogation.png')
    }
}

function playRound (playerSelection, computerSelection = computerPlay()) {
    let playerCapitalizeSelection = capitalize(playerSelection)

    if (playerCapitalizeSelection == 'Rock' && computerSelection == 'Rock' || 
    playerCapitalizeSelection == 'Paper' && computerSelection == 'Paper' ||
    playerCapitalizeSelection == 'Scissors' && computerSelection == 'Scissors') {
        tittleh1.innerHTML = 'Its a TIE'

    } else if (playerCapitalizeSelection == 'Rock' && computerSelection == 'Paper' ||
    playerCapitalizeSelection == 'Paper' && computerSelection == 'Scissors' ||
    playerCapitalizeSelection == 'Scissors' && computerSelection == 'Rock') {
        tittleh1.innerHTML = 'Computer WIN!'
        machineScore++
        cScore.innerHTML = `Cat: ${machineScore}` 

    } else if (playerCapitalizeSelection == 'Rock' && computerSelection == 'Scissors' ||
    playerCapitalizeSelection == 'Paper' && computerSelection == 'Rock' ||
    playerCapitalizeSelection == 'Scissors' && computerSelection == 'Paper') {
        tittleh1.innerHTML = 'Player WIN!'
        playerScore++
        pScore.innerHTML = `You: ${playerScore}`
        
    } else {
        return window.alert('Incorrect Value')
    }

    changeComputerPicture(computerSelection)

    if(playerScore >= 5 ){
        tittleh1.innerHTML = 'Player WIN!'
        window.alert('You WIN')
        playerScore = 0
        machineScore = 0
        pScore.innerHTML = `You: ${playerScore}`
        cScore.innerHTML = `Cat: ${machineScore}`
    } else if(machineScore >= 5){
        tittleh1.innerHTML = 'Computer WIN!'
        window.alert('You lost')
        playerScore = 0
        machineScore = 0
        pScore.innerHTML = `You: ${playerScore}`
        cScore.innerHTML = `Cat: ${machineScore}`
    }
}

function game() {    
    rock.addEventListener('click',function(){
        playRound('rock')
        playerPicture.setAttribute('src', './images/rock.png')
    })
    paper.addEventListener('click',function(){
        playRound('paper')
        playerPicture.setAttribute('src', './images/paper.png')
    })
    scissor.addEventListener('click',function(){
        playRound('scissors')
        playerPicture.setAttribute('src', './images/scissor.png')
    })
}

var machineScore = 0
var playerScore = 0

var tittleh1 = document.querySelector('.title h1')

var playerPicture = document.querySelector('#playerImg')
var computerPicture = document.querySelector('#catImg')

var rock = document.querySelector('#rock')
var paper = document.querySelector('#paper')
var scissor = document.querySelector('#scissor')

var pScore = document.querySelector('#player_score')
var cScore = document.querySelector('#cat_score')

game()