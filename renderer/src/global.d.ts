
import type{ LoginRequest, LoginResponse, SessionResponse } from "../../electron/types/auth"; 

declare global {
  interface Window {
    proctor: {
      login: (credentials: LoginRequest) => Promise<LoginResponse>;
      getSession: () => Promise<SessionResponse>;
      logout: () => boolean;
      startExam: () => {success:boolean};
      endExam: () => {success:boolean};
      checkNetwork: () => Promise<boolean>;
      getScreenSources: () => Promise<{ id: string; name: string }[]>;
    };
  }
}
