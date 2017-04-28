"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginValidationRule_1 = require("./LoginValidationRule");
class LoginValidator extends LoginValidationRule_1.LoginValidationRule {
    constructor(view) {
        super(view);
        this.setRules();
    }
    setRules() {
        this.rules = [];
        this.rules.push(new FieldsNotEmptyRule(this.view));
        this.rules.push(new UsernameNotUserRule(this.view));
    }
    validate(model) {
        for (let rule of this.rules) {
            let valid = rule.validate(model);
            if (!valid)
                return false;
        }
        return true;
    }
}
exports.LoginValidator = LoginValidator;
class FieldsNotEmptyRule extends LoginValidationRule_1.LoginValidationRule {
    validate(model) {
        if (model.username === "" || model.password === "") {
            this.view.showInputErrorMessage();
            return false;
        }
        return true;
    }
}
class UsernameNotUserRule extends LoginValidationRule_1.LoginValidationRule {
    validate(model) {
        if (model.username === "user") {
            this.view.showUsernameCantBeUserMessage();
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=LoginValidator.js.map