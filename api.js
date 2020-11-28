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


function selectAdventDay() {
    let days = [...document.querySelectorAll(".day")];
    daysDOM = days;
    days.forEach(day => {
        id = day.dataset.id;
        day.addEventListener("click", event => {
            console.log(event.target.id)
            event.target.disabled = true;
            let giftContainer = document.querySelector('#giftContainer');
            let gift = document.createElement('p');
            gift.innerText = gifts[""];
            let randomIndexFromZeroToFivteen = parseInt(Math.random() * 10 % gifts.length);
            gift.innerText = gifts[randomIndexFromZeroToFivteen];
            giftContainer.appendChild(gift);
        })
    })
};
selectAdventDay()