
import { LoginRequest, LoginResponse } from "../path-to-types/auth"; 

declare global {
  interface Window {
    proctor: {
      login: (credentials: LoginRequest) => Promise<LoginResponse>;
    };
  }
}
