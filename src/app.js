import "bootstrap";
import "./style.css";



const cardNumber = document.getElementById('cardNumber');
const cardCornerTop = document.getElementById('cardCornerTop');
const cardCornerBottom = document.getElementById('cardCornerBottom');
const refreshCardButton = document.getElementById('refreshButton');


const suits = ['♦', '♥', '♠', '♣'];
const numsToLetters = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };

const generateCardValue = () => {
    const value = Math.floor(Math.random() * 13) + 1;
    return numsToLetters[value] || value;
};

const generateSuitSymbol = () => {
    const index = Math.floor(Math.random() * suits.length);
    return suits[index];
};

const getSuitColor = (suit) => (suit === '♦' || suit === '♥') ? 'red' : 'black';

const updateCard = () => {
    const cardValue = generateCardValue();
    const suit = generateSuitSymbol();
    const color = getSuitColor(suit);

    cardNumber.innerText = cardValue;
    cardNumber.style.color = color;

    cardCornerTop.innerText = suit;
    cardCornerTop.style.color = color;

    cardCornerBottom.innerText = suit;
    cardCornerBottom.style.color = color;
}

updateCard();

refreshCardButton.addEventListener('click', updateCard);


const timer = document.getElementById('timer');
let timeLeft = 10;
let countdownInterval;


const updateCardWithTimer = () => {
  updateCard();        
  timeLeft = 10;        
  timer.innerText = timeLeft;
  timer.className = 'timerNew';
};


const startCountdown = () => {
  countdownInterval = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft === 0) {
      updateCardWithTimer();
    }
  }, 1000);
};


updateCardWithTimer(); 
startCountdown();     



