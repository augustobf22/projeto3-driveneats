function selectFood(thisBox) {
    const alreadySelected = document.querySelector('.greenBorder');

    if(alreadySelected !== null) {
        alreadySelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
}

function selectDrink(thisBox) {
    const alreadySelected = document.querySelector('.greenBorder');

    if(alreadySelected !== null) {
        alreadySelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
}

function selectDessert(thisBox) {
    const alreadySelected = document.querySelector('.greenBorder');

    if(alreadySelected !== null) {
        alreadySelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
}