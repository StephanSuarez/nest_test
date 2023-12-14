import { Injectable } from '@nestjs/common';
import { User } from "./user.entity"
import { UserInterface } from './user.interface';

     

@Injectable()
export class UserService {
    private users: User[] = [
        {id: '1', name: "stephan", age: 21}
    ]

    private findUser(id: string) :User | null{
        let userFound = this.users.find(user => user.id == id)
        if (!userFound){
            return null
        }
        return userFound
    }
    getUsers(): User[] {
        return this.users
    }

    getUserById(id: string) :User | null{
        return this.findUser(id)
    }
}
