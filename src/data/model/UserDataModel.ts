export class UserDataModel{

    private _id: number;
    private _username: string;
    private _password: string;
    private _lastLoginTimestamp: Date;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get lastLoginTimestamp(): Date {
        return this._lastLoginTimestamp;
    }

    set lastLoginTimestamp(value: Date) {
        this._lastLoginTimestamp = value;
    }
}

