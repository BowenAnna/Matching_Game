const body = document.querySelector('body');
body.style.backgroundColor = "ivory";

const gameBase = document.querySelector('.main-section');
body.appendChild(gameBase);
gameBase.style.backgroundColor = '#4285f4';

const modalContainer = document.getElementById('modal-container');
modalContainer.style.display = "none";
const gameOutput = document.getElementById('game-output');
gameOutput.textContent = "Great job!";

const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', ()=>{location.reload()});

const card = document.querySelectorAll('.card');
let cards =[...card];

function gameStart() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * cards.length);
      card.style.order = ramdomPos;
    });}

    card.forEach(card => card.addEventListener('click', cardFlip));

    let flippedCard = false;   
    let firstCard, secondCard;
    let count = 0;
    let index = 0;

    function cardFlip(){
        
    this.classList.add('flip');
    
    if(!flippedCard){
        flippedCard = true;
        firstCard = this;
        return;
    }
    else{
        flippedCard = false;
        secondCard = this;
        count++;
        gameOutput.innerHTML = "You used "+count+" moves";
        matchCheck();
    } 
 }   
    
       function matchCheck(){
        if(firstCard.dataset.image === secondCard.dataset.image){
            index +=2;
            match();
            if(index === cards.length){
                modalContainer.style.display = "initial";
              }
            return;
        }
        notMatch();
       }
      
       function match(){
        firstCard.removeEventListener('click', cardFlip);
        secondCard.removeEventListener('click', cardFlip);
       }

       function notMatch(){
        setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            },500);
        }



