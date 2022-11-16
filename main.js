const body = document.querySelector('body')
let card= document.querySelectorAll('.singleCard')
let timer=document.querySelector('#timerCount'); //timer number that will increment 
const gameOver=document.createElement('h2')


window.onload=function (){
    let seconds = 00;
    let minutes = 00;
    let appendMinutes = document.getElementById("minutes")
    let appendSeconds = document.getElementById("seconds")
    console.log(appendMinutes)
    console.log(appendSeconds)
    let Interval ;


// startBtn.addEventListener('click', function()) {
//     interval=setInterval(startTimer, 1000)()
        // if (timer>=5) {
        //     clearInterval(interval);
        //     // updateTimer(0);
        //     endGame();
        // } else {
        //     time+=1;
        //     updateTimer(time);
        // }
    
    
startBtn.onclick=function(){
    clearInterval(Interval);
    Interval=setInterval(startTimer, 1000);
}
    
function startTimer() {
    seconds++;
    if(seconds <=9) {
        appendSeconds.innerHTML="0"+seconds;
    }
    if(seconds>9) {
        appendSeconds.innerHTML = seconds;
    }
    if(seconds>59) {
        console.log('minutes');
        minutes++
        appendMinutes.innerHTML="0"+minutes;
        seconds=0;
        appendSeconds.innerHTML="0"+0;
    }
    if(minutes>9) {
        appendMinutes.innerHTML=minutes;
    }
}
}
    
    // let time=Number(timer.textContent);
    // function updateTimer(num) {
    //     timer.textContent=num; 
    // }
    // startTimer.disabled=true;
    function endGame () {
        gameOver.innerText="Time is up, you've lost the game. Refresh the page to play again!"
        return document.querySelector('#messageSection').appendChild(gameOver)
   }
// })
// }




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