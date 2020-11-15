class ResponseModel {
    constructor() {
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    getAnswer() {
        return {
            answer : this.answer
        };
    }
}

module.exports = ResponseModel;