import {User} from "../../../../domain/model/User";
import {UserViewModel} from "../UserViewModel";
import {UserMapper} from "../../../../domain/model/mapper/UserMapper";

export class UserViewModelMapper implements UserMapper<UserViewModel>{
    toEntity(userModel: UserViewModel): User {
        let user = new User();
        user.username = userModel.username;
        user.password = userModel.password;

        return user;
    }

    toModel(user: User): UserViewModel {
        let userViewModel = new UserViewModel();
        userViewModel.username = user.username;
        userViewModel.password = user.password;

        return userViewModel;
    }
}

