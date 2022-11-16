let timer=document.querySelector('#timerCount'); //timer number that will increment 
const gameOver=document.createElement('h2')


window.onload=function (){
    let seconds = 0;
    let minutes = 0;
    let displayMinutes = document.querySelector("#minutes")
    let displaySeconds = document.querySelector("#seconds")
    let Interval ;
    
startBtn.addEventListener('click', function() {
    // clearInterval(Interval);
    Interval=setInterval(startTimer, 1000);
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
    if(minutes>=5) {
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


let allCards=document.querySelectorAll('.card')
let card= document.querySelectorAll('.singleCard')
let clickedCards=[]

card.forEach(function (cardClicked) {
    cardClicked.addEventListener('click', function() {
        // this.classList.add('clicked')
        let card1=cardClicked.className
        // console.log(card1)
        clickedCards.push(card1);
        // console.log(clickedCards)
        if(clickedCards.length===2) {
            checkMatch();
            clickedCards=[];
        }
  
        })
        function checkMatch() {
            if(clickedCards[0] == clickedCards[1]) {
                console.log("match!")
            } else {
                console.log("no match")
            }
                // score++;
                //     if(score ==10){
                //         console.log("You win!")
                //     } else {
                //         console.log("no match")
                //     }
        }
    })

