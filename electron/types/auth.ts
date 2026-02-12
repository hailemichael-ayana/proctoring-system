export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message?: string
}
export interface Session{
  userId:string
  username:string
  token:string
}
export interface SessionResponse{
  userId:string 
  username:string 
}