import { Injectable } from '@nestjs/common';
import { User } from "./user.entity"
import { UserInterface } from './user.interface';

     

@Injectable()
export class UserService {
    private users: User[] = [
        {id: '1', name: "stephan", age: 21}
    ]

    getUsers(): User[] {
        return this.users
    }
}
