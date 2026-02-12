import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type {  SessionResponse } from "../../../electron/types/auth";
interface AuthContextType{
    session:SessionResponse | null
    loading:boolean
    login:(username:string, password:string) => Promise<boolean> 
}
const AuthContext = createContext<AuthContextType|undefined>(undefined);
export function AuthProvider({children}:{children:ReactNode}){
    const [session, setSession] = useState<SessionResponse | null>(null)
    const[loading,setLoading] = useState<boolean>(false)
    useEffect(() => {
    const checkSession = async () => {
        setLoading(true)
        const existingSession = await window.proctor.getSession();
        setSession(existingSession);
        setLoading(false)
    };
    checkSession();
    }, []);
    const login = async (username:string, password:string) => {
           const result = await window.proctor.login({username,password});
      if (result.success) {
        const newSession = await window.proctor.getSession()
        setSession(newSession)
        return true
    }
    return false
}
return (
    <AuthContext.Provider value={{loading,session,login}}>
        {children}
    </AuthContext.Provider>
)
    }

    export function useAuth(){
        const context =useContext(AuthContext)
        if (!context) {
            throw new Error ("used outside AuthProvider")
        }
        return context
    }