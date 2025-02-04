import {Schema, model} from 'mongoose';

export const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model("User", UserSchema); // the connection to the DB collection