import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
// import GuestRoute from './routes/GuestRoute'
// import PrivateRoute from "./routes/PrivateRoute";
const Login = lazy(()=>import ('./pages/Login'))
const InternetConnectivity = lazy(()=>import ('./pages/InternetConnectivity'))
export default function App() {

  return (
    <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route 
        // element={<GuestRoute/>}
        >
        <Route path="/" element={<Login/>}/>
        </Route>
        <Route 
        // element={<PrivateRoute />}
        >
        <Route  element={<Main/>}>
        <Route path="/connectivity" element={<InternetConnectivity/>}/>
        <Route path="/mic" element={<Login/>}/>
        <Route path="/camera" element={<Login/>}/>
        <Route path="/photo" element={<Login/>}/>
        <Route path="/idPic" element={<Login/>}/>
        <Route path="/screenShare" element={<Login/>}/>
        </Route>
        </Route>

      </Routes>
      </Suspense>
    </Router>
      
    </>
  )
}
