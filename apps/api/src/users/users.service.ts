import { Injectable } from "@nestjs/common";
import users from '../data/users.json' with {type: "json"}


@Injectable()
export class UsersService {

    getAllUsers() {
        console.log(users)
        return users
    }

    addUser(body: Omit<typeof users[number], 'id'>) {
        const newUser = {
            id: crypto.randomUUID(),
            ...body
        }

        users.push(newUser)

        return newUser
    }

}