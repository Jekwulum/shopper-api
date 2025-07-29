import { VerifyTokenResponse } from "../../src/generated/authPackage/VerifyTokenResponse";

declare global {
  namespace Express {
    interface Request {
      user?: VerifyTokenResponse;
    }
  }
}

export {};