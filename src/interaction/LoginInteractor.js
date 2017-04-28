"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginRepository_1 = require("../data/LoginRepository");
class LoginInteractor {
    constructor() {
        this.loginRepository = new LoginRepository_1.LoginRepository();
    }
    interact(requestData, callback) {
        let user = requestData.user;
        this.loginRepository.performLogin(user, {
            onUserLogin: (userLoggedIn) => {
                let responseData = new LoginInteractor.ResponseData();
                responseData.message = "Success!!";
                responseData.user = userLoggedIn;
                callback.onSuccess(responseData);
            },
            onLoginError: () => {
                callback.onError();
            }
        });
    }
}
exports.LoginInteractor = LoginInteractor;
(function (LoginInteractor) {
    class RequestData {
        get user() {
            return this._user;
        }
        set user(value) {
            this._user = value;
        }
    }
    LoginInteractor.RequestData = RequestData;
    class ResponseData {
        get user() {
            return this._user;
        }
        set user(value) {
            this._user = value;
        }
        get message() {
            return this._message;
        }
        set message(value) {
            this._message = value;
        }
    }
    LoginInteractor.ResponseData = ResponseData;
})(LoginInteractor = exports.LoginInteractor || (exports.LoginInteractor = {}));
//# sourceMappingURL=LoginInteractor.js.map