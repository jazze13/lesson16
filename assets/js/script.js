'use strict';


// 1
const elem = document.querySelector('#elem');
elem.classList += 'www';


// 2
elem.classList.remove('www');


// 3
console.log(elem.classList.contains('www'));


// 4
elem.classList.toggle('www');


// 5
console.log(elem.classList.length);


// 6
for (let clss of elem.classList)
    console.log(clss);


// 7
elem.style.cssText = `
    color:red;
    font-size:30px;
    border:2px solid black;
`;


// 8
elem.onclick = () => {
    console.log( elem.tagName );

    // 9
    console.log( elem.tagName.toLowerCase() );
}


// 10
document.querySelectorAll('.ex3 .www').forEach(elem => {
    elem.textContent += elem.tagName.toLowerCase();
})


// 11
const ex11ol = document.querySelector('.ex11 ol');

let punkt = document.createElement('li');
punkt.textContent = 'пункт';
ex11ol.appendChild(punkt);


// 12
const ex12ul = document.querySelector('.ex12 ul');
let arr = ['as', 'df', 'gh'];
for (let i of arr) {
    let li = document.createElement('li');
    li.textContent = i;
    ex12ul.appendChild(li);
}


// 13
elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');


// 14
elem.insertAdjacentHTML('afterend', '<span>!!!</span>');


// 15
elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');


// 16
elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');


// 17
const ex17remove = document.querySelector('.ex17 .remove');
ex17remove.onclick = () => {
    document.querySelector('#parent').removeChild(document.querySelector('#child'));
}


// 18
const ex18ol = document.querySelector('.ex18 ol');
const ex18remove = document.querySelector('.ex18 .remove');
ex18remove.onclick = () => {
    ex18ol.removeChild(ex18ol.lastElementChild);
}


// 19
const selfRemovable = document.querySelector('.self_removable');
selfRemovable.onclick = () => {
    selfRemovable.parentElement.removeChild(selfRemovable);
}


// 20
const lis = document.querySelectorAll('.ex20 li');
lis.forEach(li => {
    li.addEventListener('click', function() {
        this.remove();
    })
})


// 21
const ex21input = document.querySelector('.ex21 input'),
      ex21button = document.querySelector('.ex21 button');

ex21button.onclick = function() {
    let clone = ex21input.cloneNode();
    this.parentElement.appendChild(clone);
}


// 22
