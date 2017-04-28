export namespace LoginContract{
    export interface View{
        getUsername() : string;
        getPassword() : string;

        setUsername(username : string);
        setPassword(password : string);

        showUserNotAvailableMessage();
        showUsernameCantBeUserMessage();
        showInputErrorMessage();
        showLoginMessage();
    }

    export interface Presenter{
        setView(view : View);
        loginButtonClick();
    }
}