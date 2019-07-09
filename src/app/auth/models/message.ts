export class Message {
    message: string;
    isError: boolean;
    data: [{ token: '' }];
    statusCode: number;

    constructor() {
        this.data = [{ token: '' }];
    }
}