function updateButton() {
    const foodSelected = document.querySelector('.box-food.greenBorder');
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    
    const but = document.querySelector('button');
    but.disabled = true;

    if(foodSelected && drinkSelected && dessertSelected) {
        but.classList.add("buttonActive");
        but.innerHTML = "<p>Finalizar pedido</p>"
        but.disabled = false;
    }
}

function selectFood(thisBox) {
    const foodSelected = document.querySelector('.box-food.greenBorder');

    if(foodSelected !== null) {
        foodSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");

    const checked = document.querySelector('.iconFood.appear');
    
    if(checked !== null){
        checked.classList.remove("appear");
    }

    const check = thisBox.querySelector('.iconFood');
    check.classList.add("appear");
   
    updateButton();
}

function selectDrink(thisBox) {
    const drinkSelected = document.querySelector('.box-drink.greenBorder');

    if(drinkSelected !== null) {
        drinkSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");

    const checked = document.querySelector('.iconDrink.appear');
    
    if(checked !== null){
        checked.classList.remove("appear");
    }

    const check = thisBox.querySelector('.iconDrink');
    check.classList.add("appear");

    updateButton();
}

function selectDessert(thisBox) {
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');

    if(dessertSelected !== null) {
        dessertSelected.classList.remove("greenBorder");
    }
    
    thisBox.classList.add("greenBorder");

    const checked = document.querySelector('.iconDessert.appear');
    
    if(checked !== null){
        checked.classList.remove("appear");
    }

    const check = thisBox.querySelector('.iconDessert');
    check.classList.add("appear");

    updateButton();
}