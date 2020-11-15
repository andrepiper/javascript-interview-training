const Questions = require('./questions');
const Algorithms  = require('./algorithms');

console.log(new Algorithms.BubbleSort().execute([10,5,20,1,6,8,-1]).getAnswer());


console.log(new Questions.FirstRecurringCharacter().execute([2,5,1,2,3,5,1,2,4]).getAnswer());
console.log(new Questions.FirstRecurringCharacter().execute([2,1,1,2,3,5,1,2,4]).getAnswer());


console.log(new Questions.LongestPalindromicString().execute("banana").getAnswer());


console.log(new Questions.ShopifyCart().execute([["grapes",1],["apples",0],["peaches",1]]).getAnswer());
console.log(new Questions.ShopifyCart().execute([["grapes",2],["apples",4],["peaches",3]]).getAnswer());
console.log(new Questions.ShopifyCart().execute([["grapes",3],["apples",3],["peaches",2]]).getAnswer());
console.log(new Questions.ShopifyCart().execute([["grapes",4],["apples",2],["peaches",4]]).getAnswer());
console.log(new Questions.ShopifyCart().execute([["grapes",5],["apples",1],["peaches",5]]).getAnswer());
