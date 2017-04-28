"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../../domain/model/User");
const UserViewModel_1 = require("../UserViewModel");
class UserViewModelMapper {
    toEntity(userModel) {
        let user = new User_1.User();
        user.username = userModel.username;
        user.password = userModel.password;
        return user;
    }
    toModel(user) {
        let userViewModel = new UserViewModel_1.UserViewModel();
        userViewModel.username = user.username;
        userViewModel.password = user.password;
        return userViewModel;
    }
}
exports.UserViewModelMapper = UserViewModelMapper;
//# sourceMappingURL=UserViewModelMapper.js.map