"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginMemoryDataSource_1 = require("./datasource/LoginMemoryDataSource");
class LoginRepository {
    constructor() {
        this.loginMemoryDataSource = new LoginMemoryDataSource_1.LoginMemoryDataSource();
    }
    performLogin(user, callback) {
        this.loginMemoryDataSource.performLogin(user, callback);
    }
}
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=LoginRepository.js.map