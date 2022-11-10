'use strict';


// 1
const elem = document.querySelector('#elem');
elem.classList += 'www';


// 2
elem.classList.remove('www');


// 3
console.log('3:', elem.classList.contains('www'));


// 4
elem.classList.toggle('www');


// 5
console.log('5:', elem.classList.length);


// 6
for (let clss of elem.classList)
    console.log('6:', clss);


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
    li.addEventListener('click', function(e) {
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
const elem22 = document.querySelector('#elem22');
elem22.firstElementChild.style.color = 'red';


// 23
elem22.lastElementChild.style.color = 'red';


// 24
for (const child of elem22.children) {
    child.append('!');
}


// 25
const elem25 = document.querySelector('#elem25');

elem25.previousElementSibling.append('!');


// 26
elem25.nextElementSibling.append('!');


// 27
elem25.nextElementSibling.nextElementSibling.append('!');


// 28
const elem28 = document.querySelector('#elem28');

elem28.parentElement.style.color = 'red';


// 29
elem28.parentElement.parentElement.style.color = 'red';


// 30
const elem30 = document.querySelector('#elem30');
console.log('30:', elem30.clientTop);


// 31
console.log('31:', elem30.clientLeft);


// 32
const elem32 = document.querySelector('#elem32');
const button32 = document.querySelector('.ex32 button');

button32.onclick = () => {
    console.log('offsetWidth:', elem32.offsetWidth);

    // 33
    console.log('offsetHeight', elem32.offsetHeight);
}


// 34
const elem34 = document.querySelector('#elem34');
const button34 = document.querySelector('.ex34 button');

button34.onclick = () => {
    console.log('clientWidth:', elem34.clientWidth);

    //35
    console.log('clientHeight', elem34.clientHeight);
}


// 36
const elem36 = document.querySelector('#elem36');
console.log('36: height:', window.getComputedStyle(elem36)['height'], 'width:', window.getComputedStyle(elem36)['width'] );


// 37
const elem37 = document.querySelector('#elem37');
const button37log = document.querySelector('.ex37 .log');

button37log.onclick = () => {
    console.log('top:', elem37.scrollTop);
    
    // 38
    console.log('left:', elem37.scrollLeft);
}


// 39
const button37scroll1 = document.querySelector('.ex37 .scroll1');

button37scroll1.onclick = () => {
    elem37.scrollTop = 100;
}


// 40
const button37scroll2 = document.querySelector('.ex37 .scroll2');

button37scroll2.onclick = () => {
    elem37.scrollTop += 100;
}


// 41
const button41 = document.querySelector('.ex41 button');

button41.onclick = () => {
    console.log('width:', elem37.scrollWidth);

    // 42
    console.log('height:', elem37.scrollHeight);

    // 43
    elem37.scrollTop = elem37.scrollHeight - 100;
}


// 44
const button44 = document.querySelector('.ex44 button');
button44.onclick = () => {
    console.log(window.pageYOffset);

    // 45
    console.log(window.pageXOffset);
}


// 46
const button46 = document.querySelector('.ex46 button');

button46.onclick = () => {
    window.scrollTo(300, 500);
}


// 47
const button47 = document.querySelector('.ex47 button');

button47.onclick = () => {
    window.scrollBy(0, 300);
}


// 48
const button48 = document.querySelector('.ex48 button');

button48.onclick = () => {
    window.scrollTo(0, document.body.scrollHeight);
}


// 49
const button49 = document.querySelector('.ex49 button');

button49.onclick = () => {
    window.scrollBy(0, -400);
}


// 50
const button50 = document.querySelector('.ex50 button');

button50.onclick = () => {
    const html = document.querySelector('html');

    let a = window.pageYOffset + html.clientHeight

    if (a == html.scrollHeight) {
        window.scrollTo(0, 100);
    }
}


// 51
const elem51 = document.querySelector('#elem51');

elem51.onclick = () => {
    const style = window.getComputedStyle(elem51);

    let height = parseInt( style.height.slice(0, style.height.match('px').index) );
    let width = parseInt( style.width.slice(0, style.width.match('px').index) );

    elem51.style.height = (height * 2) + 'px';
    elem51.style.width = (width * 2) + 'px';
}