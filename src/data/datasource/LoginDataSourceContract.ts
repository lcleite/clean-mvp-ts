import {User} from "../../domain/model/User";

export interface LoginDataSourceContract {
    performLogin(user: User, callback: LoginDataSourceContract.Callback);
}

export namespace LoginDataSourceContract{
    export interface Callback {
        onUserLogin(user: User);
        onLoginError();
    }
}

