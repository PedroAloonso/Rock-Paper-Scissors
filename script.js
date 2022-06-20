var machineScore = 0
var playerScore = 0

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

function changeCatPicture(picture) {
    if(picture == "Rock") {
        catPicture.setAttribute('src', './images/rock.png')
    } else if (picture == 'Paper') {
        catPicture.setAttribute('src', './images/paper.png')
    } else if (picture == 'Scissors') {
        catPicture.setAttribute('src', './images/scissor.png')
    } else {
        catPicture.setAttribute('src', './images/interrogation.png')
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

    changeCatPicture(computerSelection)

    if(playerScore >= 5 || machineScore >= 5){
        tittleh1.innerHTML = 'Player WIN!'
        window.alert('teste')
        playerScore = 0
        machineScore = 0
        pScore.innerHTML = `You: ${playerScore}`
        cScore.innerHTML = `Cat: ${machineScore}`
    } else {
        tittleh1.innerHTML = 'Cat WIN!'
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

var tittleh1 = document.querySelector('.title h1')
var tittleh2 = document.querySelector('title h2')

var playerPicture = document.querySelector('#playerImg')
var catPicture = document.querySelector('#catImg')

var rock = document.querySelector('#rock')
var paper = document.querySelector('#paper')
var scissor = document.querySelector('#scissor')

var pScore = document.querySelector('#player_score')
var cScore = document.querySelector('#cat_score')

game()