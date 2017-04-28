"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserDataModel_1 = require("../UserDataModel");
const User_1 = require("../../../domain/model/User");
class UserDataModelMapper {
    toEntity(userModel) {
        let user = new User_1.User();
        user.id = userModel.id;
        user.username = userModel.username;
        user.password = userModel.password;
        return user;
    }
    toModel(user) {
        let userDataModel = new UserDataModel_1.UserDataModel();
        userDataModel.id = user.id;
        userDataModel.username = user.username;
        userDataModel.password = user.password;
        return userDataModel;
    }
}
exports.UserDataModelMapper = UserDataModelMapper;
//# sourceMappingURL=UserDataModelMapper.js.map