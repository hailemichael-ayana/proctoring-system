import { lazy, Suspense} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import GuestRoute from "./routes/GuestRoute";
import Exam from "./pages/Exam";
const Login = lazy(()=>import ('./pages/Login'))
const InternetConnectivity = lazy(()=>import ('./pages/InternetConnectivity'))
const MicCheck = lazy(()=>import ('./pages/MicCheck'))
export default function App() {

  return (
    <AuthProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<GuestRoute>
        <Login />
      </GuestRoute>}/>

        <Route  element={ <PrivateRoute> <Main /> </PrivateRoute>}>
        <Route path="/connectivity" element={<InternetConnectivity/>}/>
        <Route path="/mic" element={<MicCheck/>}/>
        <Route path="/camera" element={<InternetConnectivity/>}/>
        <Route path="/" element={<Exam/>}/>
        </Route>

      </Routes>
      </Suspense>
    </Router>
      
    </AuthProvider>
  )
}
