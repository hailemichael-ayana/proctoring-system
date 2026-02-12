import { lazy, Suspense} from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./layout/Main";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
const Login = lazy(()=>import ('./pages/Login'))
const InternetConnectivity = lazy(()=>import ('./pages/InternetConnectivity'))
export default function App() {

  return (
    <AuthProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route  element={ <PrivateRoute> <Main /> </PrivateRoute>}>
        <Route path="/connectivity" element={<InternetConnectivity/>}/>
        </Route>

      </Routes>
      </Suspense>
    </Router>
      
    </AuthProvider>
  )
}
