import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { NotFoundError } from 'rxjs';
import { Param } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

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

    @Get(':id')
    getUserById(@Param('id') id: string){
        const res = this.userService.getUserById(id)
        if(res===null){
            return new Promise((resolve, reject) =>{
                setTimeout(()=>reject('Request error'), 2000);
            });
        };
        return res
    }
}
