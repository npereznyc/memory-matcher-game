const body = document.querySelector('body')
let card= document.querySelectorAll('.singleCard')


card.forEach(function (i) {
    i.addEventListener('click', function() {
        console.log(i.className)
    })
})






function clickCard(){
    // card.ClassList.toggle('flipCard');
    // console.log('card clicked')
    
}