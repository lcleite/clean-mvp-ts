"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDataModel {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get lastLoginTimestamp() {
        return this._lastLoginTimestamp;
    }
    set lastLoginTimestamp(value) {
        this._lastLoginTimestamp = value;
    }
}
exports.UserDataModel = UserDataModel;
//# sourceMappingURL=UserDataModel.js.map