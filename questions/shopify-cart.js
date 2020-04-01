/*
    Using the payload below calculate the total price of the bags of fruits in cart, considering selected discounts.

    1 bag of grapes = 5.00
    1 bag of apples = 3.00
    1 bag of peaches = 7.00

    Discounts
    Buy 3 bags of grapes get 1 free
    Buy 3 or more bags of apples get 1 bag free
    Buy 3 or more bags of peaches get 10 % discounts off

    [["grapes",1],["apples",0],["peaches",1]] ->  12
    [["grapes",2],["apples",4],["peaches",3]] ->  37.9
    [["grapes",3],["apples",3],["peaches",2]] ->  30
    [["grapes",4],["apples",2],["peaches",4]] ->  46.2
    [["grapes",5],["apples",1],["peaches",5]] ->  54.5
*/

const ResponseModel = require('../models/response-model')

class ShopifyCart {
    calculatePrice(cart){
        let sum = 0.0;
        cart.forEach(function (cartItem) {
            sum += cartItem.price;
        });
        return sum;
    }
    priceServices(productType, quantity){
        let price = 0.0;
        if(productType === "apples"){
            if(quantity >= 3)
                price  = (quantity-1) * 3.00;
            else
                price = (quantity * 3.00);
        }
        if(productType === "peaches"){
            if(quantity >= 3)
                price = (
                            (quantity * 7.00) // quantity price
                            - //minus
                            ((10.0/100) * (quantity * 7.00)) //percentage discount calculuted from final price
                        );
            else
            price = (quantity * 7.00);
        }
        if(productType === "grapes"){
            if(quantity >= 3)
                price = (quantity - 1) * 5.00
            else
                price = (quantity * 5.00);
        }
        return price;
    }
    answer(testCase){
        let cart = [];
        let responseModel = new ResponseModel();
        for(let [productName, quantity] of testCase)
        {
            cart.push({
               productName : productName,
               quantity : quantity,
               price : this.priceServices(productName.toLowerCase(), parseInt(quantity))
            });
        }
        let finalPrice = parseFloat(this.calculatePrice(cart));
        responseModel.setResponse(finalPrice, testCase);
        return responseModel;
    }
}

module.exports = ShopifyCart;