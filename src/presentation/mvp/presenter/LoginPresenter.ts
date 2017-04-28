import {LoginContract} from "../LoginContract";
import {LoginInteractor} from "../../../interaction/LoginInteractor";
import {UserViewModel} from "../model/UserViewModel";
import {UserViewModelMapper} from "../model/mapper/UserViewModelMapper";
import {LoginValidator} from "../validation/LoginValidator";

export class LoginPresenter implements LoginContract.Presenter{

    private view : LoginContract.View;
    private loginInteractor : LoginInteractor;
    private loginValidator: LoginValidator;
    private modelMapper: UserViewModelMapper;

    constructor(view: LoginContract.View){
        this.view = view;
        this.loginInteractor = new LoginInteractor();
        this.loginValidator = new LoginValidator(view);
        this.modelMapper = new UserViewModelMapper();
    }

    public setView(view: LoginContract.View) {
        this.view = view;
    }

    public loginButtonClick() {
        let username = this.view.getUsername();
        let password = this.view.getPassword();

        let user = new UserViewModel();
        user.username = username;
        user.password = password;

        if(this.loginValidator.validate(user)){
            let requestData = new LoginInteractor.RequestData();
            requestData.user = this.modelMapper.toEntity(user);

            this.loginInteractor.interact(requestData, {
                onSuccess: (responseData: LoginInteractor.ResponseData) => {
                    this.view.showLoginMessage();
                    console.log(responseData);
                },
                onError: () => {
                    this.view.showUserNotAvailableMessage();
                    console.log("Error!");
                }
            });
        }
    }
}