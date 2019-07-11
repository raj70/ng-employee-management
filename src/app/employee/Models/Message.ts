import { Employee } from './Employee';

export class Message {
    message: string;
    isError: boolean;
    data: Employee[];
    statusCode: number;

    constructor() {
    }
}