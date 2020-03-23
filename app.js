const Questions = require('./questions');

let firstRecurringCharacter = new Questions.FirstRecurringCharacter();
console.log(firstRecurringCharacter.answer("").response);


let longestPalindromicString = new Questions.LongestPalindromicString();
console.log(longestPalindromicString.answer("banana").response);
