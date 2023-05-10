const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];
const btnGenerate = document.getElementById('btn-generate');
const btnCopy = document.getElementById('btn-copy');
const hexSpan = document.querySelector('.hexSpan');
const rgbSpan = document.querySelector('.rgbSpan');
const mainContainer = document.querySelector('.container');
const btnEspanol = document.getElementById('spanish');

btnGenerate.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0 ; i < 6 ; i++){
        hexColor += hex[getRandomNumber()];
    }
    hexSpan.textContent = hexColor;
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
    navigator.clipboard.writeText(hexSpan.innerHTML);
});

rgbSpan.addEventListener('click', function(){
    navigator.clipboard.writeText(rgbSpan.innerHTML);
});


function ajaxInit(url, method = 'get') {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    return xhr;
};

btnEspanol.addEventListener('click', e => {
    e.preventDefault();

    const xhr = ajaxInit('templates/spanish.html');
    xhr.addEventListener('load', e =>{
        if (e.target.status === 200){
            const partialHTML = e.target.responseText;
            mainContainer.innerHTML = partialHTML;
        };
    });
});


