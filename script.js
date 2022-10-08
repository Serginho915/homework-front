const square = document.querySelector(`#square`);

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
    let colors = [];
    for(let i=0; i<=2; i++){
        colors.push(getRandomIntInclusive(0,255));
    }

    return `rgb(${colors.join(`,`)})`;
}

// debugger;
const squareMoving = setInterval(() => {
//    debugger;
    let squareRightCoordinate = square.offsetLeft+square.offsetWidth;
    let squareTopCoordinate = square.offsetTop+square.offsetHeight;
    
    let bodyWidth = document.body.offsetWidth;
    let bodyHeight = document.body.offsetHeight;
    square.style.left = 0;
    square.style.top = 0;

    
    square.style.left = `${getRandomIntInclusive(0,bodyWidth - square.offsetWidth)}px`;
    square.style.top = `${getRandomIntInclusive(0,bodyHeight -square.offsetHeight)}px`;
        if(squareRightCoordinate  > bodyWidth){
            square.style.left = parseInt(square.style.left)-square.style.left*2+`px`;
        } else if(squareTopCoordinate >bodyHeight){
            
            square.style.top = parseInt(square.style.top)-square.style.top*2+`px`;
        }

},1000)

    


     setInterval(() => square.style.backgroundColor = getRandomColor(), 500);
