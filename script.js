const select = document.querySelector(`#select`);
const color  = document.querySelector(`#color`);
let element = document.querySelector(`#element`);
let chooseElement = document.querySelector(`#chooseElement`)
console.dir( color.value);


chooseElement.addEventListener(`submit`, e => {
    e.preventDefault();
    if(select.value && color.value){
        element.removeAttribute('class');
        element.removeAttribute(`style`);
        element.classList.add(`${select.value}`) 
        element.style.backgroundColor = `${color.value}`
    }
})

