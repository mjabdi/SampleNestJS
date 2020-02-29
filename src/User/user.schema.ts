import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userId: String,
    fullName: String,
    email: String,
    phone: String,
    password: String,
});