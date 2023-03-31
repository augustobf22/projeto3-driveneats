function updateButton() {
    const foodSelected = document.querySelector('.box-food.greenBorder');
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    
    const but = document.querySelector('button');
    if(foodSelected && drinkSelected && dessertSelected) {
        but.classList.add("buttonActive");
        but.innerHTML = "<p>Finalizar pedido</p>"
        but.disabled = false;
    } else {
        but.disabled = true;
    }
}

function selectFood(thisBox) {
    const foodSelected = document.querySelector('.box-food.greenBorder');

    if(foodSelected !== null) {
        foodSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
    updateButton();
}

function selectDrink(thisBox) {
    const drinkSelected = document.querySelector('.box-drink.greenBorder');

    if(drinkSelected !== null) {
        drinkSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
    updateButton();
}

function selectDessert(thisBox) {
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');

    if(dessertSelected !== null) {
        dessertSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");
    updateButton();
}