import {LoginContract} from "../LoginContract";

export abstract class LoginValidationRule<T>{
    protected view : LoginContract.View;

    constructor(view: LoginContract.View){
        this.view = view;
    }

    abstract validate(model: T): boolean;
}

