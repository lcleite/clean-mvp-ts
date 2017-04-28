export class User{
    private _id: number;
    private _username: string;
    private _password: string;

    get id() : number{
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() : string{
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() : string{
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

