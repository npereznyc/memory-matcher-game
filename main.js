const body = document.querySelector('body')
let card= document.querySelectorAll('.singleCard')
let timer=document.querySelector('#timerCount'); //timer number that will increment 
const gameOver=document.createElement('h2')

startBtn.addEventListener('click', function() {
    let time=Number(timer.textContent);
    function updateTimer(num) {
        timer.textContent=num; 
    }

    function endGame () {
        gameOver.innerText="Time is up, you've lost the game. Refresh the page to play again!"
        return document.querySelector('#messageSection').appendChild(gameOver)
    }

    interval=setInterval(()=> {
        time+=1;
        updateTimer(time);
        // if (timer>=5) {
        //     clearInterval(interval);
        //     updateTimer(0);
        //     endGame();
        // } else {
        //     time+=1;
        //     updateTimer(time);
        // }
    }, 1000) 
    // startTimer.disabled=true;
})

card.forEach(function (cardClicked) {
    cardClicked.addEventListener('click', function() {
        let card1=cardClicked.className
        console.log(card1)
    })
})






function clickCard(){
    // card.ClassList.toggle('flipCard');
    // console.log('card clicked')
    
}