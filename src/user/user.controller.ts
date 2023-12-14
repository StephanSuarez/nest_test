import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService ){}

    @Get()
    getUser(){
        return this.userService.getUsers()
    }
    
    @Post()
    createUser(@Body() newUser : UserDto){
        console.log(newUser.name, newUser.age)
    }
}
