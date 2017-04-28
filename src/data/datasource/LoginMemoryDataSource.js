"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserDataModel_1 = require("../model/UserDataModel");
const UserDataModelMapper_1 = require("../model/mapper/UserDataModelMapper");
class LoginMemoryDataSource {
    constructor() {
        this.initMemoryDatabase();
        this.modelMapper = new UserDataModelMapper_1.UserDataModelMapper();
    }
    initMemoryDatabase() {
        this.database = new Map();
        let userLeandro = new UserDataModel_1.UserDataModel();
        userLeandro.id = 1;
        userLeandro.username = "lcleite";
        userLeandro.password = "123";
        userLeandro.lastLoginTimestamp = new Date();
        let userRobot = new UserDataModel_1.UserDataModel();
        userRobot.id = 2;
        userRobot.username = "robot";
        userRobot.password = "123";
        userRobot.lastLoginTimestamp = new Date();
        this.database.set(userLeandro.id, userLeandro);
        this.database.set(userRobot.id, userRobot);
    }
    performLogin(user, callback) {
        let userModel = this.modelMapper.toModel(user);
        for (let id of this.database.keys()) {
            let userById = this.database.get(id);
            if (userModel.username === userById.username && userModel.password === userById.password) {
                callback.onUserLogin(this.modelMapper.toEntity(userById));
                return;
            }
        }
        callback.onLoginError();
    }
}
exports.LoginMemoryDataSource = LoginMemoryDataSource;
//# sourceMappingURL=LoginMemoryDataSource.js.map