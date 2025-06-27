import "bootstrap";
import "./style.css";



const cardNumber = document.getElementById('cardNumber');
const cardCornerTop = document.getElementById('cardCornerTop');
const cardCornerBottom = document.getElementById('cardCornerBottom');

const refreshCardButton = document.getElementById('refreshButton');




const generateCard = () => {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber === 1 ? 'A' :
        randomNumber === 11 ? 'J' :
            randomNumber === 12 ? 'Q' :
                randomNumber === 13 ? 'K' :
                    randomNumber;
};
let randomNumber = generateCard();
cardNumber.innerText = randomNumber;



const generateSuit = () => {
    let suits = ['♦', '♥', '♠', '♣'];
    let randomSuit = Math.floor(Math.random() * suits.length);

    cardCornerTop.style.color = (suits[randomSuit] === '♦') || (suits[randomSuit] === '♥') ? 'red' : 'black';
    cardCornerBottom.style.color = cardCornerTop.style.color;
    cardNumber.style.color = cardCornerTop.style.color;

    return suits[randomSuit];

};
let randomSuit = generateSuit();
cardCornerTop.innerText = randomSuit;
cardCornerBottom.innerText = randomSuit;





refreshCardButton.addEventListener('click', () => {
    randomNumber = generateCard();
    cardNumber.innerText = randomNumber;
    randomSuit = generateSuit();
    cardCornerTop.innerText = randomSuit;
    cardCornerBottom.innerText = randomSuit;
});
