import {User} from "../User";

export interface UserMapper<T>{
    toEntity(userModel: T) : User;
    toModel(user: User) : T;
}

