class ResponseModel {
    constructor(response) {
        this.response = response;
    }

    getResponse() {
        return this.response;
    }

    setResponse(value) {
        this.response = value;
    }
}

module.exports = ResponseModel;