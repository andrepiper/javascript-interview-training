const Questions = require('./questions');

let firstRecurringCharacter = new Questions.FirstRecurringCharacter();
console.log(firstRecurringCharacter.answer([2,5,1,2,3,5,1,2,4]).getResponse());
console.log(firstRecurringCharacter.answer([2,1,1,2,3,5,1,2,4]).getResponse());


let longestPalindromicString = new Questions.LongestPalindromicString();
console.log(longestPalindromicString.answer("banana").getResponse());


let shopifyCart = new Questions.ShopifyCart();
console.log(shopifyCart.answer([["grapes",1],["apples",0],["peaches",1]]).getResponse());
console.log(shopifyCart.answer([["grapes",2],["apples",4],["peaches",3]]).getResponse());
console.log(shopifyCart.answer([["grapes",3],["apples",3],["peaches",2]]).getResponse());
console.log(shopifyCart.answer([["grapes",4],["apples",2],["peaches",4]]).getResponse());
console.log(shopifyCart.answer([["grapes",5],["apples",1],["peaches",5]]).getResponse());
