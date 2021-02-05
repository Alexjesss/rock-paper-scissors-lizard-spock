// Sections for fade-ins/outs //

let resetSection = document.querySelector('.Reset');
let introSection = document.querySelector('.main');
let gameMechanicsSection = document.querySelector('.game');

// Player & Computer icons + score + title + hands //

let players = document.querySelector('.container');
let hands = document.querySelector('.container-two');

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

    let Playerscore = document.querySelector('.Player h5');
    let Computerscore = document.querySelector('.Computer h5');
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

        Playerscore.textContent = Pscore.toString();
        Computerscore.textContent = Mpcscore.toString();
    }

    // Compare hands Player VS Computer //

    function compare(playerchoice, pcchoice) {

        let playerIcon = document.getElementsByClassName('player-image');
        let computerIcon = document.getElementsByClassName('computer-image');


        if (playerchoice === pcchoice) {
            announcement.textContent = 'It is a tie';
            return;
        }

        if (playerchoice === 'rock') {
            if (pcchoice === 'scissors') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else if (pcchoice === 'paper') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else if (pcchoice === 'lizard') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            }
        }

        if (playerchoice === 'paper') {
            if (pcchoice === 'scissors') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else if (pcchoice === 'rock') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else if (pcchoice === 'lizard') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            }
        }

        if (playerchoice === 'scissors') {
            if (pcchoice === 'paper') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else if (pcchoice === 'rock') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else if (pcchoice === 'lizard') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            }
        }

        if (playerchoice === 'lizard') {
            if (pcchoice === 'scissors') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else if (pcchoice === 'paper') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            } else if (pcchoice === 'rock') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
                return;
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
                return;
            }
        }

        if (playerchoice === 'spock') {
            if (pcchoice === 'scissors') {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
            } else if (pcchoice === 'paper') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
            } else if (pcchoice === 'lizard') {
                Mpcscore++;
                announcement.textContent = 'You lose';
                scores();
            } else {
                Pscore++;
                announcement.textContent = 'You win';
                scores();
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
        Playerscore.textContent = '0';
        Computerscore.textContent = '0';
        announcement.textContent = "Live results";
        playerHand.textContent = 'hands/rock.png';
        computerHand.textContent = 'hands/rock.png';
    })

}


