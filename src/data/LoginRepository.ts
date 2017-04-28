import {LoginDataSourceContract} from "./datasource/LoginDataSourceContract";
import {LoginMemoryDataSource} from "./datasource/LoginMemoryDataSource";
import {User} from "../domain/model/User";

export class LoginRepository implements LoginDataSourceContract{

    private loginMemoryDataSource: LoginMemoryDataSource;

    constructor(){
        this.loginMemoryDataSource = new LoginMemoryDataSource();
    }

    performLogin(user: User, callback: LoginDataSourceContract.Callback) {
        this.loginMemoryDataSource.performLogin(user, callback);
    }
}

