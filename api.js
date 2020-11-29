const gifts = [
    'Cukierek',
    'Batonik',
    'Buziak od mamy',
    'Buziak od taty',
    'Guma do żucia',
    'Niespodzianka',
    'Coś dla ciała',
    'Cos dla ducha',
    'Napój',
    'Świąteczny gadżet',
    'Przytulas',
    'Buziak od mamy',
    'Buziak od taty',
    '5 PLN na lodBuziak od mamy i taty',
];
let daysDOM = [];
let id;
let day;
let giftContainer = document.querySelector('#giftContainer');
giftContainer.className=('');


function selectAdventDay() {
    let days = [...document.querySelectorAll('.day')];
    daysDOM = days;
    days.forEach(day => {
        day.addEventListener('click', event => {    
            event.target.className=('past-date')
            giftContainer.className=('gift-container');
            let gift = document.createElement('p');
            giftContainer.appendChild(gift);
            let randomIndexFromZeroToFivteen = parseInt(Math.random() * 10 % gifts.length);
            gift.innerText = gifts[randomIndexFromZeroToFivteen];
        })
    })
};

selectAdventDay()
