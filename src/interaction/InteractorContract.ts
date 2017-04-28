export interface InteractorContract<T,R>{
    interact(requestData: T, callback: InteractorContract.Callback<R>);
}

export namespace InteractorContract{
    export interface RequestData {}
    export interface ResponseData {}

    export interface Callback<R extends ResponseData> {
        onSuccess(responseData: R);
        onError();
    }
}

