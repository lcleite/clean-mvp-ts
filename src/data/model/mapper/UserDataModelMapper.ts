import {UserDataModel} from "../UserDataModel";
import {User} from "../../../domain/model/User";
import {UserMapper} from "../../../domain/model/mapper/UserMapper";

export class UserDataModelMapper implements UserMapper<UserDataModel>{
    toEntity(userModel: UserDataModel): User {
        let user = new User();
        user.id = userModel.id;
        user.username = userModel.username;
        user.password = userModel.password;

        return user;
    }

    toModel(user: User): UserDataModel {
        let userDataModel = new UserDataModel();
        userDataModel.id = user.id;
        userDataModel.username = user.username;
        userDataModel.password = user.password;

        return userDataModel;
    }
}

