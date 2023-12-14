import { IsNotEmpty, IsNumber, IsString, min, minLength } from "class-validator";

export class UserDto {
    // @IsString({message: "Must be a string"})
    // @IsNotEmpty({message: "Can not be empty"})
    id?: string;

    @IsString({message: "Must be a string"})
    @IsNotEmpty({message: "Can not be empty"})
    name: string;
    
    @IsNumber()
    @IsNotEmpty({message: "Can not be empty"})
    age: number;
}