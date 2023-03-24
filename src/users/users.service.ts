import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async updateUser() {
    const result = await this.userModel.updateOne(
      { name: 'Jaziel' },
      { $set: { age: 18 } },
    );
    return result;
  }
}
