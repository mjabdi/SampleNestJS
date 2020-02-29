import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { Logger } from "nestjs-pino";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(private logger : Logger,
    @InjectModel('user') private readonly userModel: Model<User>
    ){

  }


  async create(user: User) : Promise<User>{
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll() : Promise<User[]>{
    return this.userModel.find().exec();
  }

  
}