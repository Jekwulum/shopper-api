import {IUser} from "../../src/models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: IUser | null;
    }
  }
}