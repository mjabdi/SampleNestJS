import {CreateUserDto} from './user.dto';
import { v4 as uuidv4 } from 'uuid';

export class User {

    userId: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;

    constructor(userDto: CreateUserDto){
        this.userId = uuidv4();
        this.fullName = userDto.fullName;
        this.email = userDto.email;
        this.phone = userDto.phone;
        this.password = userDto.password;
    }

  }