import {LoginValidationRule} from "./LoginValidationRule";
import {UserViewModel} from "../model/UserViewModel";
import {LoginContract} from "../LoginContract";

export class LoginValidator extends LoginValidationRule<UserViewModel>{

    private rules: Array<LoginValidationRule<UserViewModel>>;

    constructor(view: LoginContract.View){
        super(view);
        this.setRules();
    }

    private setRules(){
        this.rules = [];
        this.rules.push(new FieldsNotEmptyRule(this.view));
        this.rules.push(new UsernameNotUserRule(this.view));
    }

    validate(model: UserViewModel): boolean {
        for(let rule of this.rules){
            let valid = rule.validate(model);
            if(!valid)
                return false;
        }

        return true;
    }
}

class FieldsNotEmptyRule extends LoginValidationRule<UserViewModel>{
    validate(model: UserViewModel): boolean {
        if(model.username === "" || model.password === "") {
            this.view.showInputErrorMessage();
            return false;
        }

        return true;
    }
}

class UsernameNotUserRule extends LoginValidationRule<UserViewModel>{
    validate(model: UserViewModel): boolean {
        if(model.username === "user"){
            this.view.showUsernameCantBeUserMessage();
            return false;
        }

        return true;
    }
}

