import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import type { SessionResponse } from "../../electron/types/auth";
// import GuestRoute from './routes/GuestRoute'
// import PrivateRoute from "./routes/PrivateRoute";
const Login = lazy(()=>import ('./pages/Login'))
const InternetConnectivity = lazy(()=>import ('./pages/InternetConnectivity'))
export default function App() {
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
if (loading) return <div>Loading...</div>;
  if (!session) {
    return <Login onLoginSuccess={setSession} />;
  }
  return (
    <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route 
        // element={<GuestRoute/>}
        >
        <Route path="/" element={<Login onLoginSuccess={setSession}/>}/>
        </Route>
        <Route 
        // element={<PrivateRoute />}
        >
        <Route  element={<Main/>}>
        <Route path="/connectivity" element={<InternetConnectivity/>}/>
        <Route path="/mic" element={<Login onLoginSuccess={setSession}/>}/>
        <Route path="/camera" element={<Login onLoginSuccess={setSession}/>}/>
        <Route path="/photo" element={<Login onLoginSuccess={setSession}/>}/>
        <Route path="/idPic" element={<Login onLoginSuccess={setSession}/>}/>
        <Route path="/screenShare" element={<Login onLoginSuccess={setSession}/>}/>
        </Route>
        </Route>

      </Routes>
      </Suspense>
    </Router>
      
    </>
  )
}
