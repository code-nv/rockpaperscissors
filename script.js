app = {};

let compVar = ""
let choiceVar = prompt("Please pick rock paper or scissors");


app.computerChoice = () => {
    compVar = Math.ceil(Math.random() * 3);
}

app.convertComputer = () => {
    if (compVar == 1) {
        compVar = 'rock';
    } else if (compVar == 2) {
        compVar = 'paper';
    } else if (compVar == 3) {
        compVar = 'scissors';
    } 
}

app.assess = () => {
    if (compVar == 'rock' && choiceVar == 'paper') {
        console.log('you win!')
    }
    else if (compVar == 'paper' && choiceVar == 'scissors') {
        console.log('you win!')
    } else if (compVar == 'scissors' && choiceVar == 'rock') {
        console.log('you win!')
    } else if (compVar == choiceVar) {
        console.log('tie!')
    }
    else {
        console.log('you lost')
    }
}

app.showLogic = () => {
    console.log('you chose ' + choiceVar)
    console.log('the computer chose ' + compVar)
}

app.init = function(){
    app.computerChoice();
    app.convertComputer();
    app.showLogic();
    app.assess();
}


$(function() {

app.init()

});