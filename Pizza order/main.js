const pizzaOrder = (id, price) => {
    let toppingPrice;
    let deliveryPrice;
    let totalPrice = price + toppingPrice + deliveryPrice;
    const pizzaSize = () => {
        if (id == "for2") {
            price = 7.5;
            console.log(price);
            console.log(totalPrice);
            return totalPrice;
        } else if (id == "for4") {
            price = 10.5;
            console.log(price);
            return totalPrice;
        } else if (id == "for6") {
            price = 12.5;
            console.log(price);
            return totalPrice;
        } else if (id == "for8") {
            price = 15.5;
            console.log(price);
            return totalPrice;
        }
    }
    pizzaSize();
    /* Pizza topping part */
     document.getElementById('select').onclick = function() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked.length');
        console.log(checkboxes.length);
    } 
   
    /* Pizza delivery options */
   /*  const pizzaDelivery = () => {

    }
    pizzaDelivery(); */

    totalPrice = parseFloat(price + toppingPrice + deliveryPrice);
    final.textContent = `total price is ${totalPrice} €`;
    /* console.log(totalPrice); */
}
pizzaOrder();