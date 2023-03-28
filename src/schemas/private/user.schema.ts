import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UserPrivateDocument = HydratedDocument<UserPrivate>;
@Schema()
export class UserPrivate {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  dateOfBirth: string;
  @Prop()
  money: number;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  admin: string;
}
export const UserPrivateSchema = SchemaFactory.createForClass(UserPrivate);
