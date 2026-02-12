import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}:{children:ReactNode}) => {
  const {session,loading} = useAuth()
  if (loading) {
    <div className="">Loading ...</div>
  }
  if (!session) {
    return <Navigate to={'/login'} replace/>
  }
  return children
  
}

export default PrivateRoute