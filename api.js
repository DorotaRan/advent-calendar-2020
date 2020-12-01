const gifts = [
    'Candy',
    'Chocolate bar',
    'Kiss from mum',
    'Kiss from dad',
    'Chewing gum',
    'Surprise',
    'Something for the body',
    'Something for the spirit',
    'Drink',
    'Christmas gadget',
    'Hug',
    '5 PLN',
];

let daysDOM = [];
let id;
let day;
let giftContainer = document.querySelector('#giftContainer');
giftContainer.className=('');
selectAdventDay();


function selectAdventDay() {
    let days = [...document.querySelectorAll('.day')];
    daysDOM = days;
    days.forEach(day => {
         day.addEventListener('click', () => {  
            day.className=('clicked-day');
            giftContainer.className=('gift-container');
            let gift = document.createElement('p');
            giftContainer.appendChild(gift);
            let randomIndexFromZeroToFivteen = parseInt(Math.random() * 10 % gifts.length);
            gift.innerText = gifts[randomIndexFromZeroToFivteen];

            if (day.style.textDecoration == 'line-through'){
                day.removeAttribute('style');
                localStorage.setItem(day.id, false);
            }
            else {
                day.style.textDecoration = 'line-through'
                localStorage.setItem(day.id, true);
            }
        })
    })
};
Array.from(document.getElementsByClassName('day')).map(day => {
	if (localStorage.getItem(day.id) == 'true') {
        day.style.textDecoration = 'line-through';
        day.style.color = 'rgb(63, 73, 80)';
    }
});


  
