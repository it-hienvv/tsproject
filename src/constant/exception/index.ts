type Code = {
    message: string;
    code: number;
};

class Exception extends Error {
    code: number;
    constructor(errObj: Code, name?: string) {
        super();
        this.message = errObj.message;
        this.code = errObj.code;
        if (name) {
            this.name = name;
        } else {
            this.name = 'LocalException';
        }
    }
}

export {Exception};
