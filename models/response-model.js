class ResponseModel {
    constructor(answer, testCase) {
        this.answer = answer;
        this.testCase = testCase;
    }

    getResponse() {
        return {
            answer : this.answer,
            testCase : this.testCase
        };
    }

    setResponse(answer, testCase) {
        this.answer = answer;
        this.testCase = testCase;
    }
}

module.exports = ResponseModel;