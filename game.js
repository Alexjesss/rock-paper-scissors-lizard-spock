// Sections for fade-ins/outs //

let resetSection = document.querySelector('.Reset');
let introSection = document.querySelector('.main');
let gameMechanicsSection = document.querySelector('.game');

// Player & Computer icons + score + title + hands //

let computerIcon = document.getElementsByClassName('computer-image');
let playerIcon = document.getElementsByClassName('player-image');
let players = document.querySelector('.container');
let hands = document.querySelector('.container-two');

// Image change on player & computer wins //

let win = false;

// Push Play button to fade in & out sections //


document.getElementById('play').addEventListener('click', function () {

    introSection.classList.add('fadeout');
    players.classList.add('fadein');
    hands.classList.add('fadein');
    gameMechanicsSection.classList.add('fadein');
    resetSection.classList.add('fadein');
    Start();

})

// Start the game //

function Start() {

    let playerScore = document.querySelector('.Player h5');
    let computerScore = document.querySelector('.Computer h5');
    let announcement = document.querySelector('.result');
    let playerHand = document.querySelector('.img-left');
    let computerHand = document.querySelector('.img-bigger');

    // Beginning scores for Player & Computer //

    let Mpcscore = 0;
    let Pscore = 0;

    // Start the matches //

    function match() {
        let allbuttons = document.querySelectorAll('.game button');

        let computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        allbuttons.forEach(button => {
            button.addEventListener('click', function () {

                let randomize = Math.round(Math.random() * 4);
                let pcchoice = computerOptions[randomize];



                compare(this.textContent, pcchoice);
                playerHand.src = `./hands/${this.textContent}.png`;
                computerHand.src = `./hands/${pcchoice}.png`;
            })
        })
    }

    // Update scores to inner text beginning scores //

    function scores() {

        playerScore.textContent = Pscore.toString();
        computerScore.textContent = Mpcscore.toString();
    }

    // Compare hands Player VS Computer //

    function Playerwins (){

        if (win) {
            computerIcon[0].src = 'other/brokencomputer.png';
        }

        else {
            playerIcon[0].src = 'other/sadplayer.png';
        }
    }

    function compare(playerChoice, pcchoice) {

        computerIcon[0].src = 'other/computer.png';
        playerIcon[0].src = 'other/player.png';

        if (playerChoice === pcchoice) {
            announcement.textContent = 'It is a tie';
            return;
        }

        if (playerChoice === 'rock') {
            if (pcchoice === 'scissors') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'paper') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'lizard') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (pcchoice === 'scissors') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'rock') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'lizard') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (pcchoice === 'paper') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'rock') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'lizard') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            }
        }

        if (playerChoice === 'lizard') {
            if (pcchoice === 'scissors') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'paper') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            } else if (pcchoice === 'rock') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
                return;
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
                return;
            }
        }

        if (playerChoice === 'spock') {
            if (pcchoice === 'scissors') {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
            } else if (pcchoice === 'paper') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
            } else if (pcchoice === 'lizard') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                win = false;
                scores();
                Playerwins();
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                win = true;
                scores();
                Playerwins();
            }
        }

    }

    // Hover animation on buttons //

    let allButtons = document.querySelectorAll('.game button');
    let allImages = document.querySelectorAll('.img');

    for (let i = 0; i < allImages.length; i++) {

        allButtons[i].addEventListener('mouseover', function () {
            allImages[i].className = ('img appear');

        })

        allButtons[i].addEventListener('mouseleave', function () {
            allImages[i].className = ('img');
        })

    }

    match();
    scores();

    // Reset button //

    document.getElementById('reset').addEventListener('click', function () {
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        Mpcscore = 0;
        Pscore = 0;
        announcement.textContent = "Live results";
        playerHand.src = 'hands/rock.png';
        computerHand.src = 'hands/rock.png';
        computerIcon[0].src = 'other/computer.png';
        playerIcon[0].src = 'other/player.png';

    })

}


