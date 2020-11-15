const ResponseModel = require('../models/response-model')

class FirstRecurringCharacter {
    execute(testCase){
        let responseModel = new ResponseModel(testCase);
        for (let i = 0; i < testCase.length; i++) {
            if (testCase.indexOf(testCase[i]) !== i) {
                responseModel.setAnswer(testCase[i]);
                return responseModel;
            }
        }
        return responseModel;
    }
}

module.exports = FirstRecurringCharacter;