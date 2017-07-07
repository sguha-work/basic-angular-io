import { Injectable } from '@angular/core';
import {User} from './data/user.data';
@Injectable()
export class UserService {
    public static users: Array<User>;

    constructor() {
        if(typeof UserService.users === "undefined") {
            UserService.users = [];
        } 
        
    }

    public getUser(email: string): any {
        let user: any;
        for(let index in UserService.users) {
            if(UserService.users[index].email === email) {
                user = UserService.users[index];
                break;
            }
        }
        return user;
    }

    public getUserPassword(email: string): string {
        let user: User;
        user = this.getUser(email);
        if(typeof user.password === "undefined") {
            return "";
        }
        return user.password;
    }

    public setUser(user: User): Boolean {
        let flag: Boolean;
        
        UserService.users.push(user);
        console.log(UserService.users);
        flag = true;
        
        return flag;
    }
}