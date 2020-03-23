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
            //if apples quantity >=2 discount on price is 20%, price is 3.00
            if(quantity >= 2)
                price = (quantity * 3.00) - ((20.0/100) * (quantity * 3.00));
            else
                price = (quantity * 3.00);
        }
        if(productType === "peaches"){
            //price is 7.00
            price = (quantity * 7.00);
        }
        if(productType === "grapes"){
            //if quantity >=2 give one free, price 5.00
            if(quantity >= 2)
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
        responseModel.setResponse(finalPrice);
        return responseModel;
    }
}

module.exports = ShopifyCart;