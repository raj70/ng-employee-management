import { Employee } from './Employee';
import { Role } from './Role';

export class Message {
    message: string;
    isError: boolean;
    data: Employee[];
    statusCode: number;

    constructor() {
    }
}

export class RoleResponse {
    message: string;
    isError: boolean;
    data: Role[];
    statusCode: number;

    constructor() {
        this.data = [];
    }
}