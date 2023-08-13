// divContainer
let divContainer = document.querySelector('#div-container')


// divItems
for (let i = 0;i<256;i++){
    let div = document.createElement('div');
    div.classList.add('div-item');
    divContainer.appendChild(div);
    div.addEventListener('mouseover',()=>{div.style.backgroundColor = 'black'})
}


//deleteDivs()
function deleteDivs(){
    let parentContainer = document.querySelector('#div-container')
    let divsToErase = document.querySelectorAll('.div-item')
    divsToErase.forEach(div =>{
        parentContainer.removeChild(div)
    })
}

//createDivs()
function createDivs(newSize){
    for (let i = 0;i<(newSize*newSize);i++){
        let div = document.createElement('div');
        let divContainer = document.querySelector('#div-container')
        div.classList.add('div-item');
        divContainer.appendChild(div);
        div.addEventListener('mouseover',()=>{div.style.backgroundColor = 'black'})
    }
}

//cleanBord
function cleanBoard(){
    let divsToErase = document.querySelectorAll('.div-item');
    divsToErase.forEach(div =>{
        div.style.backgroundColor = 'white';    
    })
    }


//Prompt

function newSize(){
    newSizeChoice = prompt("How many squares do you want your new grid to have per side?");
    deleteDivs();
    createDivs(newSizeChoice)
    divContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(calc(100% / ${newSizeChoice}), 1fr))`;  
    divContainer.style.gridTemplateRows = `repeat(auto-fill, minmax(calc(100% / ${newSizeChoice}), 1fr))`;  
    cleanBoard()
}


//Button
const button = document.querySelector('#btn')
button.addEventListener('click', newSize)

