const ResponseModel = require('../models/response-model')

class FirstRecurringCharacter {
    submit(){
        let responseModel = new ResponseModel();
        responseModel.setResponse("TEST");
        return responseModel;
    }
}

module.exports = FirstRecurringCharacter;