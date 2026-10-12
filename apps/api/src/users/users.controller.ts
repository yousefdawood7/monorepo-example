import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import data from '../data/users.json' with {type: 'json'}


@Controller('/users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
 

    @Get()
    getAllUsers() {
        const users = this.userService.getAllUsers()

        return {message: "users returned successfully", data: users}
    }
    


    @Post()
    addUser(@Body() body:  Omit<typeof data[number], 'id'>) {
        const newUser = this.userService.addUser(body)
        
        return {message: "user has been created successfully", data: newUser}
    }

}
