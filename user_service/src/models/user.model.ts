import mongoose, {Document, Schema, Model} from 'mongoose';
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  validatePassword(password: string): Promise<boolean>;
}

const schema = new Schema(
  {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
  },
  {timestamps: true},
);

schema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  console.log('Password hashed successfully');
  next();
});

schema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
}

const UserModel: Model<IUser> = mongoose.model<IUser>('User', schema);
export default UserModel;