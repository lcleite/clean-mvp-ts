import {LoginDataSourceContract} from "./LoginDataSourceContract";
import {UserDataModel} from "../model/UserDataModel";
import {User} from "../../domain/model/User";
import {UserDataModelMapper} from "../model/mapper/UserDataModelMapper";

export class LoginMemoryDataSource implements LoginDataSourceContract{

    private database: Map<number, UserDataModel>;
    private modelMapper: UserDataModelMapper;

    constructor(){
        this.initMemoryDatabase();
        this.modelMapper = new UserDataModelMapper();
    }

    private initMemoryDatabase(){
        this.database = new Map();

        let userLeandro = new UserDataModel();
        userLeandro.id = 1;
        userLeandro.username = "lcleite";
        userLeandro.password = "123";
        userLeandro.lastLoginTimestamp = new Date();

        let userRobot = new UserDataModel();
        userRobot.id = 2;
        userRobot.username = "robot";
        userRobot.password = "123";
        userRobot.lastLoginTimestamp = new Date();

        this.database.set(userLeandro.id, userLeandro);
        this.database.set(userRobot.id, userRobot);
    }

    performLogin(user: User, callback: LoginDataSourceContract.Callback) {
        let userModel = this.modelMapper.toModel(user);

        for (let id of this.database.keys()) {
            let userById = this.database.get(id);
            if (userModel.username === userById.username && userModel.password === userById.password){
                callback.onUserLogin(this.modelMapper.toEntity(userById));
                return;
            }
        }

        callback.onLoginError();
    }
}

