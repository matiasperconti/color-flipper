const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const btnCopy = document.getElementById('btn-copy');
const rgbSpan = document.querySelector('.rgbSpan');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0 ; i < 6 ; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

    let r = parseInt((hexColor.slice(1,3)),16);
    let g = parseInt((hexColor.slice(3,5)),16);
    let b = parseInt((hexColor.slice(5,7)),16);
    
    rgbSpan.textContent = `${r}, ${g}, ${b}`;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};

btnCopy.addEventListener('click', function(){
    navigator.clipboard.writeText(color.innerHTML);
});

rgbSpan.addEventListener('click', function(){
    navigator.clipboard.writeText(rgbSpan.innerHTML);
});