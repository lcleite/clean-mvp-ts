import {LoginContract} from "../LoginContract"
import {LoginPresenter} from "../presenter/LoginPresenter";
import * as $ from 'jquery';

export class LoginView implements LoginContract.View{

    private presenter : LoginPresenter;
    private loginInput : JQuery;
    private passwordInput : JQuery;
    private buttonOk : JQuery;

    constructor(){
        this.initViews();
    }

    initViews(){
        this.presenter = new LoginPresenter(this);
        this.presenter.setView(this);

        this.loginInput = $("#loginInput");
        this.passwordInput = $("#passwordInput");
        this.buttonOk = $("#buttonOk");
        this.buttonOk.on("click",  () => {
            this.presenter.loginButtonClick();
        });
    }

    public getUsername(): string {
        return this.loginInput.val().trim();
    }

    public getPassword(): string {
        return this.passwordInput.val().trim();
    }

    public setUsername(username: string) {
        this.loginInput.val(username)
    }

    public setPassword(password: string) {
        this.passwordInput.val(password)
    }

    public showUserNotAvailableMessage() {
        alert("User is not available!");
    }

    public showUsernameCantBeUserMessage() {
        alert("Username can't be \"user\"!");
    }

    public showInputErrorMessage() {
        alert("Login or passworld field is empty!");
    }

    public showLoginMessage() {
        alert("Logged in!");
    }
}

