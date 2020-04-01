const ResponseModel = require('../models/response-model')

class FirstRecurringCharacter {
    answer(testCase){
        let responseModel = new ResponseModel();
        for (let i = 0; i < testCase.length; i++) {
            if (testCase.indexOf(testCase[i]) !== i) {
                responseModel.setResponse(testCase[i], testCase);
                return responseModel;
            }
        }
        return responseModel;
    }
}

module.exports = FirstRecurringCharacter;