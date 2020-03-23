const Questions = require('./questions');

let firstRecurringCharacter = new Questions.FirstRecurringCharacter();
console.log(firstRecurringCharacter.answer("").response);


let longestPalindromicString = new Questions.LongestPalindromicString();
console.log(longestPalindromicString.answer("banana").response);


let shopifyCart = new Questions.ShopifyCart();
console.log(shopifyCart.answer([["grapes",1],["apples",0],["peaches",1]]).response);
console.log(shopifyCart.answer([["grapes",2],["apples",4],["peaches",3]]).response);
console.log(shopifyCart.answer([["grapes",3],["apples",3],["peaches",2]]).response);
console.log(shopifyCart.answer([["grapes",4],["apples",2],["peaches",4]]).response);
console.log(shopifyCart.answer([["grapes",5],["apples",1],["peaches",5]]).response);
