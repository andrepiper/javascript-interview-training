/*
    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
    Example 2:

    Input: "cbbd"
    Output: "bb"
 */

const ResponseModel = require('../models/response-model')

class LongestPalindromicString
{
    answer(testCase){
        let responseModel = new ResponseModel();
        if (testCase === undefined || testCase === null || testCase.length < 1) {
            responseModel.setResponse('');
            return responseModel;
        }
        let longest = testCase.substring(0, 1)
        for(let i = 0; i < testCase.length; i++) {
            let temp = this.expand(testCase, i, i)
            if(temp.length > longest.length) {
                longest = temp
            }
            temp = this.expand(testCase, i, i + 1)
            if(temp.length > longest.length) {
                longest = temp
            }
        }
        responseModel.setResponse(longest, testCase);
        return responseModel;
    }

    expand(str, begin, end){
        while(begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
            begin--
            end++
        }
        return str.substring(begin + 1, end);
    }
}

module.exports = LongestPalindromicString;