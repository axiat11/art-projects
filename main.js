let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
// context.fillRect(100, 100, 400, 400); // ukrywamy tło zakomentowując je
//(punkt X, punkt Y, szer., wys.) odniesione do obiektu canvas

context.lineWidth = 4;//szerokość konturu
context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke(); //kontur

// rysujemy koło
context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
//(punkt X, punkt Y, promień, szer., kąt początkowy, kąt końcowy(w radianach)) odniesione do obiektu canvas
// zob https://www.w3schools.com/tags/canvas_arc.asp
// context.stroke(); //kontur

const width = 60;
const height = 60;
const gap = 20;
let x, y;

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        x = 100 + (width + gap) * i;
        y = 100+ (height + gap) * j;
    
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke();
        }        
    }
}



let year = 2042;
let nextYear = year + 1;

let dinner = 'salad';
let sentence = 'Tonight, dinner will be ' + dinner;

function saySomething(param) {
    console.log(param);
}

saySomething(sentence);

function add(a, b) {    
    return a + b;
}

let result = add(5, 7);
console.log(result)

let multiply = (a , b) => {
    return a * b;
}

console.log(multiply(5, 7))

let years = [];
let menu = ['starter', 'main', 'dessert', 'drinks', 'sides'];

for(let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}

for(let i = 0; i < 10; i++) {
    years.push(2040 + i);
}

console.log(years)

const gravity = 9.81;
let velocity = 0.0;

menu.forEach(item => {
    console.log(item);
})

