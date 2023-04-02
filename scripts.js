function updateButton() {
    const foodSelected = document.querySelector('.box-food.greenBorder');
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    
    const but = document.querySelector('.lastButton');
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

function getFood() {
    const foodSelected = document.querySelector('.box-food.greenBorder');
    
    if(foodSelected !== null) {
        const foodSelectedText = foodSelected.querySelector('h4').innerHTML;
        return(foodSelectedText);
    }
}

function getDrink() {
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    
    if(drinkSelected !== null) {
        const drinkSelectedText = drinkSelected.querySelector('h4').innerHTML;
        return(drinkSelectedText);
    }
}

function getDessert() {
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    
    if(dessertSelected !== null) {
        const dessertSelectedText = dessertSelected.querySelector('h4').innerHTML;
        return(dessertSelectedText);
    }
}

function getTotal() {
    const foodSelected = document.querySelector('.box-food.greenBorder');
    const foodSelectedPrice = foodSelected.querySelector('h6').innerHTML;
    
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    const drinkSelectedPrice = drinkSelected.querySelector('h6').innerHTML;
    
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    const dessertSelectedPrice = dessertSelected.querySelector('h6').innerHTML;

    const foodPrice = Number(foodSelectedPrice.replace(/\D/g, ''));
    const drinkPrice = Number(drinkSelectedPrice.replace(/\D/g, ''))
    const dessertPrice = Number(dessertSelectedPrice.replace(/\D/g, ''));

    const totalCalc = (foodPrice+drinkPrice+dessertPrice) / 100;

    return totalCalc.toFixed(2);
}

function sendWpp(name, address) {
    const whichFood = getFood();
    const whichDrink = getDrink();
    const whichDessert = getDessert();
    const total = getTotal();
    
    const bruteText="Olá, gostaria de fazer o pedido: \n- Prato: "+whichFood+"\n- Bebida: "+whichDrink+"\n- Sobremesa: "+whichDessert+"\nTotal: R$ "+total+"\n\nNome: "+name+"\nEndereço: "+address;
    const msgWpp = encodeURIComponent(bruteText);
    
    window.location='https://wa.me/5551982420112?text='+msgWpp;
}

function modalRevise() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("hidden")

    const foodSelected = document.querySelector('.box-food.greenBorder');
    const foodSelectedText = foodSelected.querySelector('h4').innerHTML;
    const foodSelectedPrice = foodSelected.querySelector('h6').innerHTML;
    
    const drinkSelected = document.querySelector('.box-drink.greenBorder');
    const drinkSelectedText = drinkSelected.querySelector('h4').innerHTML;
    const drinkSelectedPrice = drinkSelected.querySelector('h6').innerHTML;
    
    const dessertSelected = document.querySelector('.box-dessert.greenBorder');
    const dessertSelectedText = dessertSelected.querySelector('h4').innerHTML;
    const dessertSelectedPrice = dessertSelected.querySelector('h6').innerHTML;

    const foodPrice = Number(foodSelectedPrice.replace(/\D/g, ''));
    const drinkPrice = Number(drinkSelectedPrice.replace(/\D/g, ''))
    const dessertPrice = Number(dessertSelectedPrice.replace(/\D/g, ''));

    const totalCalc = (foodPrice+drinkPrice+dessertPrice) / 100;

    const total = totalCalc.toFixed(2);

    document.querySelector('.modalFood').innerHTML = foodSelectedText;
    document.querySelector('.modalFoodPrice').innerHTML = foodSelectedPrice;

    document.querySelector('.modalDrink').innerHTML = drinkSelectedText;
    document.querySelector('.modalDrinkPrice').innerHTML = drinkSelectedPrice;

    document.querySelector('.modalDessert').innerHTML = dessertSelectedText;
    document.querySelector('.modalDessertPrice').innerHTML = dessertSelectedPrice;

    document.querySelector('.modalTotal').innerHTML = "R$ "+total;
}

function closeOrder() {
    const name = prompt("Qual o seu nome?") ;
    const address = prompt("Qual o endereço de entrega?");


    sendWpp(name,address);
}

function cancel() {
    const modal = document.querySelector('.modal');
    modal.classList.add("hidden");
}