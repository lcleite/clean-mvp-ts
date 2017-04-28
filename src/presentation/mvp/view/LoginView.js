"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPresenter_1 = require("../presenter/LoginPresenter");
const $ = require("jquery");
class LoginView {
    constructor() {
        this.initViews();
    }
    initViews() {
        this.presenter = new LoginPresenter_1.LoginPresenter(this);
        this.presenter.setView(this);
        this.loginInput = $("#loginInput");
        this.passwordInput = $("#passwordInput");
        this.buttonOk = $("#buttonOk");
        this.buttonOk.on("click", () => {
            this.presenter.loginButtonClick();
        });
    }
    getUsername() {
        return this.loginInput.val().trim();
    }
    getPassword() {
        return this.passwordInput.val().trim();
    }
    setUsername(username) {
        this.loginInput.val(username);
    }
    setPassword(password) {
        this.passwordInput.val(password);
    }
    showUserNotAvailableMessage() {
        alert("User is not available!");
    }
    showUsernameCantBeUserMessage() {
        alert("Username can't be \"user\"!");
    }
    showInputErrorMessage() {
        alert("Login or passworld field is empty!");
    }
    showLoginMessage() {
        alert("Logged in!");
    }
}
exports.LoginView = LoginView;
//# sourceMappingURL=LoginView.js.map