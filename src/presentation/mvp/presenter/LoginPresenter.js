"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginInteractor_1 = require("../../../interaction/LoginInteractor");
const UserViewModel_1 = require("../model/UserViewModel");
const UserViewModelMapper_1 = require("../model/mapper/UserViewModelMapper");
const LoginValidator_1 = require("../validation/LoginValidator");
class LoginPresenter {
    constructor(view) {
        this.view = view;
        this.loginInteractor = new LoginInteractor_1.LoginInteractor();
        this.loginValidator = new LoginValidator_1.LoginValidator(view);
        this.modelMapper = new UserViewModelMapper_1.UserViewModelMapper();
    }
    setView(view) {
        this.view = view;
    }
    loginButtonClick() {
        let username = this.view.getUsername();
        let password = this.view.getPassword();
        let user = new UserViewModel_1.UserViewModel();
        user.username = username;
        user.password = password;
        if (this.loginValidator.validate(user)) {
            let requestData = new LoginInteractor_1.LoginInteractor.RequestData();
            requestData.user = this.modelMapper.toEntity(user);
            this.loginInteractor.interact(requestData, {
                onSuccess: (responseData) => {
                    this.view.showLoginMessage();
                    console.log(responseData);
                },
                onError: () => {
                    this.view.showUserNotAvailableMessage();
                    console.log("Error!");
                }
            });
        }
    }
}
exports.LoginPresenter = LoginPresenter;
//# sourceMappingURL=LoginPresenter.js.map