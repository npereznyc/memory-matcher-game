let timer=document.querySelector('#timerCount'); //timer number that will increment 
const gameOver=document.createElement('h2')
const youWin=document.createElement('h2')


window.onload=function (){
    let seconds = 0;
    let minutes = 0;
    let displayMinutes = document.querySelector("#minutes")
    let displaySeconds = document.querySelector("#seconds")
    let Interval ;
    
    startBtn.addEventListener('click', function() {
        clearInterval(Interval); //prevents timer from incrementing faster if button is clicked again.
        Interval=setInterval(startTimer, 1000);


    let allCards=document.querySelectorAll('.card')
    let cardFront=document.querySelectorAll('.cardFront')
    let card= document.querySelectorAll('.singleCard')
    let clickedCards=[]
    let flippedCards=[]

    allCards.forEach(function (cardClicked) {
        cardClicked.addEventListener('click', function() {
            // flip();
            cardClicked.classList.add('flip');
                console.log(cardClicked)
            let card1=cardClicked.className
                console.log(card1)
            clickedCards.push(card1);
                console.log(clickedCards)
            if(clickedCards.length===2) {
            checkMatch();
            clickedCards=[];
            }
        })
    })

    // card.forEach(function (cardClicked) {
    //     cardClicked.addEventListener('click', function() {
    //         flip();
    //         let card1=cardClicked.className
    //             // console.log(card1)
    //         clickedCards.push(card1);
    //             // console.log(clickedCards)
    //         if(clickedCards.length===2) {
    //         checkMatch();
    //             // if (clickedCards[0]!==clickedCards[1]) {
    //             //     cardFlipped.classList.remove('flip')
    //             //     console.log('card flipped back')
    //         clickedCards=[];
    //         }
    //     })
    // })

    
    // function flip () {
    //     allCards.forEach(function(cardFlipped) { 
    //         cardFlipped.addEventListener('click', function() {
    //             cardFlipped.classList.add('flip');
    //             console.log(cardFlipped)
    //         })
    //     })
    // }
    //array of cards that have been flipped - if there's no match, loop through and flip them back
    // function flipBack () {
    //     allCards.forEach(function(cardFlipped) { 
    //             cardFlipped.classList.remove('flip')
    //                 console.log('card flipped back')
    //     })
    // }
     
    function flipBack () {
        allCards.forEach(function(cardClicked) { 
                cardClicked.classList.remove('flip')
                    console.log('card flipped back')
        })
    }

    let startingScore=document.querySelector('#score')
    let score=Number(startingScore.textContent)
    
    function updateScore(num) {
        startingScore.textContent=num;
        }
    
    function checkMatch() {
    if(clickedCards[0] == clickedCards[1]) {
        console.log("match!");
        score+=1;
        updateScore(score);
        // clickedCards[0].removeEventListener('click', function(){
        // })
        if(score ==10){
        win()
        } 
        } else {
            setTimeout (flipBack, 1000);
            console.log("no match")
            //flip cards back
        }
    }
    })
    
    
    function startTimer() {
        seconds++;
        if(seconds <=9) {
            displaySeconds.innerHTML="0"+seconds;
        }
        if(seconds>9) {
            displaySeconds.innerHTML = seconds;
        }
        if(seconds>59) {
            minutes++
            displayMinutes.innerHTML="0"+minutes;
            seconds=0;
            displaySeconds.innerHTML="0"+0;
        }
        if(minutes>=2) {
            clearInterval(Interval);
            endGame();
            displaySeconds.innerHTML="0"+0;
            displayMinutes.innerHTML="0"+0;
        }
    }
}

function endGame () {
    gameOver.innerText="Time is up, you've lost the game. Refresh the page to play again!"
    return document.querySelector('#messageSection').appendChild(gameOver)
}

function win() {
youWin.innerText="You've matched all the cards! You win! Refresh the page to play again."
return document.querySelector('#messageSection').appendChild(youWin)
}

