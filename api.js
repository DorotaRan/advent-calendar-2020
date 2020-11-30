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
            day.className=('past-date');
            giftContainer.className=('gift-container');
            let gift = document.createElement('p');
            giftContainer.appendChild(gift);
            let randomIndexFromZeroToFivteen = parseInt(Math.random() * 10 % gifts.length);
            gift.innerText = gifts[randomIndexFromZeroToFivteen];
            // localStorage.setItem('day', JSON.stringify(day.id) )
            function selected(day) {
                // this.clear();
                day.style.textDecoration = 'line-through';
                window.localStorage.setItem('textDecoration', 'line-through');
            }
            selected()
        })
    })
};

window.onload = function() {
    if (window.localStorage.getItem('textDecoration')) {
        document.querySelector('.day').style.textDecoration = window.localStorage.getItem('textDecoration')
    }
}

  
