const card = document.querySelectorAll('.card');
const body = document.querySelector('body')
console.log(card)

// card.addEventListener('click', flipCard);

function flipCard(){
    // card.ClassList.toggle('flipCard');
    console.log('card clicked')
}

// body.addEventListener('click', e => {
//     if(e == card) {
//         flipCard();
//     } else {
//         console.log('no match');
//         return
//     }
// })

document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('click', event => {
        flipCard()
    })
})