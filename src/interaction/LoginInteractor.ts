import {User} from "../domain/model/User";
import {LoginRepository} from "../data/LoginRepository";
import {InteractorContract} from "./InteractorContract";

export class LoginInteractor implements InteractorContract<LoginInteractor.RequestData, LoginInteractor.ResponseData>{

    private loginRepository: LoginRepository;

    constructor(){
        this.loginRepository = new LoginRepository();
    }

    interact(requestData: LoginInteractor.RequestData, callback: LoginInteractor.Callback) {
        let user: User = requestData.user;

        this.loginRepository.performLogin(user, {
            onUserLogin: (userLoggedIn: User) => {
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

export namespace LoginInteractor {
    export class RequestData implements InteractorContract.RequestData {
        private _user: User;

        get user(): User {
            return this._user;
        }

        set user(value: User) {
            this._user = value;
        }
    }

    export class ResponseData implements InteractorContract.ResponseData {
        private _user: User;
        private _message: string;

        get user(): User {
            return this._user;
        }

        set user(value: User) {
            this._user = value;
        }

        get message(): string {
            return this._message;
        }

        set message(value: string) {
            this._message = value;
        }
    }

    export interface Callback extends InteractorContract.Callback<ResponseData> {
        onSuccess(responseData: ResponseData);
        onError();
    }
}